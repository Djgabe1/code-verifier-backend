import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse>;
}

export interface IUserController {
    //Read all users from the database || get user By ID
    getUsers(id?: string): Promise<any>;
    //Delete user from the database || get user By ID
    deleteUser(id?: string): Promise<any>;
}

