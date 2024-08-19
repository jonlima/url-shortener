export interface IUser {
  id?: number;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date;
}

export interface ICreateUser
  extends Pick<IUser, 'id' | 'email' | 'createdAt'> {}

export interface IPayloadUser extends Pick<IUser, 'id' | 'email'> {}
