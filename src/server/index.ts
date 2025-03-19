import express, { Express,Request,Response  } from "express";

//Swagger
import swaggerUi from "swagger-ui-express";

//* Security
import cors from "cors";
import helmet from "helmet";

//TODO HTTPS
//* Root Routers
import rootRouter from "../routes";
import mongoose from "mongoose";
import exp from "constants";

//* Create express Server o App
const server: Express = express();

//* Swagger Config and route
server.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions:{
            url:"/swagger.json",
            explorer:true
        }
    })
);


//* Define SERVER to use "/api" and use RootRouters from index.ts in routes folder
//* From this point onover: http://localhost:8000/api/...
server.use(
    '/api',
    rootRouter);

//* Static server
server.use(express.static("public"));

//TODO mongoose connection
mongoose.connect('mongodb://localhost:27017/codeverification', )


//*Security cofig
server.use(helmet());
server.use(cors());

//*Content Type:
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));

//*Redirections
//http://localhost:8000/ --> http://localhost:8000/api
server.get("/", (req: Request, res: Response) => {
    res.redirect("/api");
}
);

export default server;
