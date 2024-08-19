import { IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ValidationMessages } from '../../common/constants/validation-messages';

export class CreateUrlDto {
  @ApiProperty({
    description: 'The original URL that needs to be shortened',
    example: 'https://google.com/very/long/url',
    type: String,
  })
  @IsNotEmpty({
    message: ({ property }) => ValidationMessages.required(property),
  })
  @IsUrl({}, { message: ({ property }) => ValidationMessages.isUrl(property) })
  originalUrl: string;
}
