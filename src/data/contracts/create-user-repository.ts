import { UserModel } from "../models";

export interface CreateUserRepository {
  create: (userData: UserModel) => Promise<UserModel>
}
