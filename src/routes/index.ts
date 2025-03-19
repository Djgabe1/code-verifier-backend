/* *
*Root Router
*Redirections to Routers
*/

import express, {Request, Response} from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';
import exp from 'constants';
import { log } from 'console';
import userRouter from './UserRouter';

//Server Instance 

let server= express();


//Router Instance
let rootRouter = express.Router();

//Activate for Requests to http://localhost:8000/api/
//Get:  http://localhost:8000/api/
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: http://localhost:8000/api/');
    //Send Hello World as response
    res.send('Welcome to APP Express + Nodemon + jest + TS + Swagger + Mongoose');
});


//Redirections to Routers & controllers

server.use('/', rootRouter); // http://localhost:8000/api/
server.use('/hello', helloRouter); // http://localhost:8000/api/hello/

//Add more routers to the app
server.use('/users', userRouter); // http://localhost:8000/api/users/

export default server;