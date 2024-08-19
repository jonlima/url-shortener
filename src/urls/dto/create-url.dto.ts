import { IsNotEmpty, IsUrl } from 'class-validator';
import { ValidationMessages } from '../../common/constants/validation-messages';

export class CreateUrlDto {
  @IsNotEmpty({
    message: ({ property }) => ValidationMessages.required(property),
  })
  @IsUrl({}, { message: ({ property }) => ValidationMessages.isUrl(property) })
  originalUrl: string;
}
