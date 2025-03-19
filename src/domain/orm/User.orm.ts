import { userEntity } from "../entites/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";

//CRUD

/**
 *  Method to obtain all users from Colletion "Users" in Mongo server
 */
export const getAllUsers = async ():Promise<any [] |  undefined> => {
    try {
        let usersModels = userEntity();        
        // Search all users
        return await usersModels.find();
    } catch (error) {
        LogError(`[ORM] Error in GetAllUsers: ${error}`);
    }
};

//TODO:
//Get User by ID
export const getUserById = async (id: string):Promise<any | undefined> => {
    try{
        let usersModels = userEntity();
        //Search user by ID
        return await usersModels.findById(id);

    }catch(error){
        LogError(`[ORM ERROR] Getting User By ID : ${error}`);
    }
}
//Delete User by ID
export const deleteUserById = async (id: string):Promise<any | undefined> => {
    try{
        let usersModels = userEntity();
        //Delete user by ID
        return await usersModels.deleteOne({_id: id});

    }catch(error){
        LogError(`[ORM ERROR] Deleting User By ID : ${error}`);
    }
} 

//TODO:
//Get User by Email

//Create New User
//Update User by ID