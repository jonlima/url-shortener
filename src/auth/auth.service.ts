import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
  ) {}

  /**
   * Validates a user's email and password.
   * @param {string} email - The user's email address.
   * @param {string} pass - The user's password.
   * @returns {Promise<any>} - The user object if valid credentials; otherwise null.
   */
  async validateUser(email: string, pass: string): Promise<any> {
    return await this._usersService.validateUser(email, pass);
  }

  /**
   * Logs in a user and returns an access token.
   * @param {IUser} user - The user object containing user details.
   * @returns {{ access_token: string }} - An object containing the JWT access token.
   */
  login(user: IUser) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: `Bearer ${this._jwtService.sign(payload)}`,
    };
  }
}
