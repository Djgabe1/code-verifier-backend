import express ,{ Request, Response } from "express";
import { UserController } from "../controller/UsersController";
import { LogInfo } from "../utils/logger";

//Router from express
let usersRouter = express.Router();

// http://localhost:8000/api/users?id=67d49dfd79ca77cdafeccc7a
usersRouter.route('/')
// GET
.get(async (req: Request, res: Response) => {
    //Obtain a Query parame (id)
    let id: any = req?.query?.id;
    LogInfo(`Query Param: ${id}`);
    // Call the controller Instance
    const controller: UserController = new UserController();
    // Call the method
    const response:any = await controller.getUsers(id);
    // Return the response
    res.send(response);
})
//Delete: http://localhost:8000/api/users
.delete(async (req: Request, res: Response) => {
    //Obtain a QueryParam (ID)
    let id: any = req?.query?.id;
    LogInfo(`Query Param: ${id}`);
    //Controller Instance to excute the method
    const controller: UserController = new UserController();
    //Obtain Response
    const response:any = await controller.deleteUser(id);
    //Send to the Client the response
    res.send(response);
})
// POST
.post(async (req: Request, res: Response) => {
    // Call the controller Instance

    let name: any = req?.query?.name;
    let age: any = req?.query?.age;
    let email: any = req?.query?.email;
    LogInfo(`Query Param: ${name} ${age} ${email}`);
    const controller: UserController = new UserController();

    let user = {
        name: name || "default",
        email: email || "default email",
        age: age || 0
    }
    // Call the method
    const response = await controller.createUser(user);
    // Return the response
    res.send(response);
})
.put(async (req: Request, res: Response) => {
    //Obtain a Query Param (ID)
    let id: any =req?.query?.id;
    let name: any = req?.query?.name;
    let email: any = req?.query?.email;
    let age: any = req?.query?.age;
    LogInfo(`Query Params: ${id} ${name} ${age} ${email}`);
     //Controller Instance to excute the method
    const controller: UserController = new UserController();

    let user ={
        name: name ,
        email: email ,
        age: age 
    }
    //Obtain Response
    const response: any = await controller.updateUser(id, user);
    //Send to the Client the response
    res.send(response);
})
/* usersRouter.route('/:user_id')
.get()
 */
// export UsersRoute
export default usersRouter;