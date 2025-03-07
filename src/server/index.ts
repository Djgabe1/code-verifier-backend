import express, { Express,Request,Response  } from "express";

//* Security
import cors from "cors";
import helmet from "helmet";

//TODO HTTPS
//* Root Routers
import rootRouter from "../routes";

//* Create express Server o App
const server: Express = express();

//* Define SERVER to use "/api" and use RootRouters from index.ts in routes folder
//* From this point onover: http://localhost:8000/api/...
server.use(
    '/api',
    rootRouter);

//* Static server
server.use(express.static("public"));

//TODO mongoose connection



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
