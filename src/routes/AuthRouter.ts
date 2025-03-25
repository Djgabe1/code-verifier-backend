import express, {Request, Response} from "express";
import { AuthController } from "../controller/AuthController";
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.Interface";

//BCRYPT for password
import bcrypt from "bcrypt";


let authRouter = express.Router();

/**
 * Register
 */
authRouter.route('/auth/register')
.post(async (req: Request, res: Response) => {

    let {name, email, password, age} = req.body;
    let hashedpassword ='';

    if(name && password && email && age){
        
        //Obttain the password in request and cypher
        hashedpassword = await bcrypt.hash(password, 8);

        let newUser: IUser ={
            name: name,
            email: email,
            password: hashedpassword,
            age: age
        }
        //Controller Instance to excute method
        const controller: AuthController = new AuthController();
        //Obtain response
        const response: any = await controller.registerUser(newUser);
        //Send to the Client the response
        res.status(200).send(response);
    }
})
/**
 * Login
 */
authRouter.route('/auth/login')
.post(async (req: Request, res: Response) => {

    let {email, password} = req.body;
    let hashedpassword ='';

    if(password && email){
        
        let auth: IAuth = {
            email: email,
            password: password
        }
        
        //Controller Instance to excute method
        const controller: AuthController = new AuthController();
        //Obtain response
        const response: any = await controller.loginUser(auth);
        //Send to the Client the response which includes the jwt to authorize request
        res.status(200).send(response);
    }
});

export default authRouter;