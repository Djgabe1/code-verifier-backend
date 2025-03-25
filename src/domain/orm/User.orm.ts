import { userEntity } from "../entites/User.entity";
import { LogError, LogSuccess } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";
import { IAuth } from "../interfaces/IAuth.Interface";

//BCRYPT form passwords
import bcrypt from 'bcrypt';

//JWT
import jwt from 'jsonwebtoken';

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
    
}
//Update User by ID
export const updateUserById = async (id: string, user: any):Promise<any | undefined> => {
    try{
        let usersModels = userEntity();
        //Update user by ID
        return await usersModels.findByIdAndUpdate(id, user);

    }catch(error){
        LogError(`[ORM ERROR] Updating User By ID ${id}: ${error}`);
    }
}
//Register User
export const registerUser = async (user: IUser):Promise<any | undefined> => {
    
    try{
        let usersModels = userEntity();
        //Create new user
        return await usersModels.create(user);

    }catch(error){
        LogError(`[ORM ERROR] Register User : ${error}`);
    } 
}

//Login User

export const loginUser = async(auth: IAuth): Promise<any | undefined> =>{
    try{
        let userModel = userEntity();
        //Find user by email
        userModel.findOne({email: auth.email}, (err: any, user: IUser)=>{
            if(err){
                //TODO return error -> Error while seaeching (500)
            }

            if(!user){
                //TODO return error-> USER NOT FOUND (404)
            }
            //Use Bycript to compare Password
            let validPassword = bcrypt.compareSync(auth.password, user.password);
            
            if(validPassword){
                //TODO --> NOT AUTHORISECD (401)

            }
            //Create JWT
            //TODO Secret must be in .env
            let token = jwt.sign({email: user.email}, 'MYSECRETWORD', {
                expiresIn: '2h'
            });
            return token;
        })
        
        

    }catch(error){
        LogError(`[ORM ERROR]: Login User: ${error}`)
    }
}

export const logoutUser= async(user: IUser): Promise<any | undefined> =>{
    //TODO NOT IMPLEMENT 
}

