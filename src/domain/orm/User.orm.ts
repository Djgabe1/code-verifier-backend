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
//Create New User
export const createUser = async (user: any):Promise<any | undefined> => {
    try{
        let usersModels = userEntity();
        //Create new user
        return await usersModels.create(user);

    }catch(error){
        LogError(`[ORM ERROR] Creating User : ${error}`);
    } 
    //Update User by ID

}
export const updateUserById = async (id: string, user: any):Promise<any | undefined> => {
    try{
        let usersModels = userEntity();
        //Update user by ID
        return await usersModels.findByIdAndUpdate(id, user);

    }catch(error){
        LogError(`[ORM ERROR] Updating User By ID ${id}: ${error}`);
    }
}
//TODO:
//Get User by Email
