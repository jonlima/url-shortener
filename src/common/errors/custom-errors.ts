import { ConflictException, NotFoundException } from '@nestjs/common';
import { ERROR_MESSAGES } from './error-messages';

export class URLNotFoundException extends NotFoundException {
  constructor() {
    super(ERROR_MESSAGES.URL_NOT_FOUND);
  }
}

export class EmailIsRegisteredException extends ConflictException {
  constructor() {
    super(ERROR_MESSAGES.EMAIL_IS_REGISTERED);
  }
}
