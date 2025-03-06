import express ,{ Request, Response } from "express";
import { HelloController } from "@/controller/HelloController";
import { LogInfo } from "@/utils/logger";

//Router from express
let helloRouter = express.Router();

// http://localhost:8000/api/hello/
helloRouter.route('/')
// GET
.get(async (req: Request, res: Response) => {
    // Obtain a query parameter
    let name: any = req?.query?.name; 
    LogInfo(`Query parameter: ${name}`);
    // Call the controller Instance
    const controller: HelloController = new HelloController();
    // Call the method
    const response = await controller.getMessage(name);
    // Return the response
    res.send(response);
})

// export HelloRouter
export default helloRouter;