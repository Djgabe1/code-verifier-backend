import { Delete, Get, Post, Put, Query, Route, Tags} from "tsoa";
import {IAuthController} from './Interfaces';
import { LogSuccess, LogError, LogWarning } from "../utils/logger";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.Interface";


//ORM Imports
import { registerUser, loginUser,logoutUser } from "../domain/orm/User.orm";

@Route("/auth/register")
@Tags("AuthController")
export class AuthController implements IAuthController{
    @Post("/register")
    public async registerUser(user: IUser): Promise<any> {
        let response: any = ''

        if(user){
            LogSuccess(`[/api/auth/register] Register new User${user}`);
            await registerUser(user).then((r)=>{
                response ={
                    message: `User Created successfully: ${user.name}`
                }
            })
        }else{
            LogWarning('[/api/auth/register] Register needs User Entity');
            response = {
                message: 'Please, provide an User to created one'
            }
        }
        return response;
    }
    @Post("/login")
    public async loginUser(auth: IAuth): Promise<any> {
        let response: any = ''
        if(auth){
            LogSuccess(`[/api/auth/login] Loged User${auth.email}`);
            await loginUser(auth).then((r)=>{
                LogSuccess(`[api/login] Logged in User:${auth.email} `);
                response ={
                    message: `User logged in successfully: ${auth.email}`,
                    token: r.token //JWT generated for logged in user
                }
            })
        }else{
            LogWarning('[/api/auth/login] Register needs Auth Entity(email && password)');
            response = {
                message: 'Please, provide a email && password tod login'
            }
        }
        return response;
    }

    @Post("/logout")
    public async logoutUser():Promise<any> {
        let response: any = ''
        //TODO close session of user
        throw new Error("Method not implemented.");
    }
}