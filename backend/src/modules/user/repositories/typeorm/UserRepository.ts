import { IUserRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserModel } from "../../models/IUserModel";

class UserRepository implements IUserRepository {

    create(data: ICreateUserDTO): Promise<IUserModel> {
        throw new Error("Method not implemented.");
    }

    save(user: IUserModel): Promise<IUserModel> {
        throw new Error("Method not implemented.");
    }

}

export {UserRepository};