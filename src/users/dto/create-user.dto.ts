import { IsNotEmpty, IsEmail, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ValidationMessages } from '../../common/constants/validation-messages';

export class CreateUserDto {
  @ApiProperty({ description: 'Email to user', example: 'example@example.com' })
  @IsNotEmpty({
    message: ({ property }) => ValidationMessages.required(property),
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'Password to user', example: 'abcd1234' })
  @IsNotEmpty({
    message: ({ property }) => ValidationMessages.required(property),
  })
  @IsString({
    message: ({ property }) => ValidationMessages.isString(property),
  })
  @Length(8, 16, {
    message: 'Password length should be between 8 and 16 characters',
  })
  readonly password: string;
}
