import {Delete, Get, Query, Route, Tags} from "tsoa";
import { IUserController } from "./Interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - User Collection
import { getAllUsers, getUserById, deleteUserById } from "../domain/orm/User.orm";



@Route("/api/users")
@Tags("UserController")
export class UserController implements IUserController {
  
    /**
     * Endpoint to reatreive the Users in the Collection "Users" in the Mongo server
     * 
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
    
}