import { hash, compare } from 'bcrypt';

const SALT_ROUNDS = 10;

export async function generateHashPassword(password: string): Promise<string> {
  const hashPassword = await hash(password, SALT_ROUNDS);
  return hashPassword;
}

export async function comparePassword(
  password: string,
  encriptedPassword: string,
): Promise<boolean> {
  const isMatch = await compare(password, encriptedPassword);
  return isMatch;
}
