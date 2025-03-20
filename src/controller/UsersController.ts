import {Delete, Get, Post, Put, Query, Route, Tags} from "tsoa";
import { IUserController } from "./Interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - User Collection
import { getAllUsers, getUserById, deleteUserById, createUser,updateUserById } from "../domain/orm/User.orm";



@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
  
    /**
     * Endpoint to get the users in the collection "users" of db
     * @param {strind} id Id of the user to get (optional)
     * @returns All user o user found by id
    */
    @Get("/")
    public async getUsers(@Query()id?: string): Promise<any> {
        let response: any = '';
        if (id) {
            LogSuccess(`[/api/users] - Get User By Id Request: ${id}`);
            response = await getUserById(id);
        }else {
            LogSuccess('[/api/users] - Get  All Users Request');
            response = await getAllUsers();
        }
        return response;
    }
    /**
     * Endpoint to delete the users in the collection "users" of db
     * @param {strind} id Id of the user to get (optional)
     * @returns message informing if deletion was correct
    */
    @Delete("/")
    public async deleteUser(@Query()id?: string): Promise<any> {
        let response: any = '';

        if (id) {
            LogSuccess(`[/api/users] Delete User By Id: ${id}`);
            await deleteUserById(id).then((r)=>{
                response = {
                    message: `User with ID: ${id} was deleted`
                }
            })
        }else {
            LogWarning('[/api/users] Delete User Request WITHOUT ID');
            response = {
                message: 'Please, provide an ID to delete the User'
            }
        }
        return response;
    }
    /**
     * Endpoint to delete the users in the collection "users" of db
     * @param {strind} id Id of the user to get (optional)
     * @returns message informing if deletion was correct
    */
    @Post("/")
    public async createUser(user: any): Promise<any> {
        let response: any = '';
        
        await createUser(user).then((r)=>{
            LogSuccess(`[/api/users] Create User: ${user}`);
            response = {
                message: `User was created: ${user.name}`
            }
        })
        return response;
    }
    /**
     * Endpoint to delete the users in the collection "users" of db
     * @param {strind} id Id of the user to get (optional)
     * @returns message informing if deletion was correct
    */
    @Put("/")
    public async updateUser(@Query()id: string, user: any): Promise<any> {
        let response: any = '';
        LogSuccess(`[/api/users] Update User By Id: ${id}`);
        if (id) {
            LogSuccess(`[/api/users] Update User By Id: ${id}`);
            await updateUserById(id, user).then((r)=>{
                response = {
                    message: `User with ID: ${id} was updated exit`
                }
            }
            )
        } else {
            LogWarning('[/api/users] Update User Request WITHOUT ID');
            response = {
                message: 'Please, provide an ID to update the User'
            }
        }
    }
}