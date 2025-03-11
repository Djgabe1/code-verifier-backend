import { userEntity } from "../entites/User.entity";
import { LogError, LogSuccess } from "@/utils/logger";

//CRUD

/**
 *  Method to obtain all users from Colletion "Users" in Mongo server
 */
export const GetAllUsers = async ():Promise<any [] |  undefined> => {
    try {
        const usersModels = userEntity();
        // Search all users
        return await usersModels.find({isDeleted: false});
    } catch (error) {
        LogError(`[ORM] Error in GetAllUsers: ${error}`);
    }
};

//TODO:
//Get User by ID
//Get User by Email
//Delete User by ID
//Create New User
//Update User by ID