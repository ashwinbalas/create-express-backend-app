import User, { IUser } from "./user.model.ts";

export const createUser = (data: IUser) => User.create(data);
export const getUsers = () => User.find();
