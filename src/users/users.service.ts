import { Injectable, Inject, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USERS_REPOSITORY } from 'src/common/constants/constants';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { EmailIsRegisteredException } from 'src/common/errors/custom-errors';
import {
  comparePassword,
  generateHashPassword,
} from 'src/utils/password.utils';
import { ICreateUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly _userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ICreateUser> {
    try {
      const { email, password } = createUserDto;
      const isRegisteredEmail = await this._userRepository.findOne({
        where: { email },
      });

      if (isRegisteredEmail) throw new EmailIsRegisteredException();

      const hashPassword = await generateHashPassword(password);

      const newUser = await this._userRepository.create({
        email,
        password: hashPassword,
      });

      const savedUser = await this._userRepository.save(newUser);

      return {
        id: savedUser.id,
        email: savedUser.email,
        createdAt: savedUser.createdAt,
      };
    } catch (error) {
      throw error;
    }
  }

  async validateUser(email: string, password): Promise<User> {
    const user = await this._userRepository.findOne({
      where: { email },
    });

    if (user) {
      const isValid = await comparePassword(password, user.password);
      if (isValid) return { ...user, password: undefined };
    }

    return null;
  }
}
