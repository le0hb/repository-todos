import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository {
    create(data : ICreateUserDTO) : Promise<String>;
}

export {IUserRepository};