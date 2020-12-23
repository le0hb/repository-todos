import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUserModel } from "../models/IUserModel";

interface IUserRepository {
    create(data : ICreateUserDTO) : Promise<IUserModel>;
    save(user : IUserModel) : Promise<IUserModel>;
}

export {IUserRepository};