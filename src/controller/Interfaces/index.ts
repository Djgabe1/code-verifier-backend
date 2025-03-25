import { IUser } from "../../domain/interfaces/IUser.interface";
import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    //Read all users from the database || get user By ID
    getUsers(id?: string): Promise<any>;
    //Delete user By ID
    deleteUser(id?: string): Promise<any>;
    //Create User
    createUser(user: any): Promise<any>;
    //Update User
    updateUser(id: string, user: any): Promise<any>;
}

export interface IAuthController{
    //register user
    registerUser(user: IUser): Promise<any>;
    //login User
    loginUser(auth: any): Promise<any>;
}