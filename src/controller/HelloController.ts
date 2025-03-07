import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./Interfaces";
import { LogSuccess } from "../utils/logger";

@Route("/api/hello")
@Tags("HelloController")
export class HelloController implements IHelloController {
    /**
     * Endpoint to retrive a Mesagger "Hello, {name}!" in JSON format
     * @param {string | undefined} name Name to user to be greeted
     * @returns {BasicResponse} Promise of basic response
     */
    @Get("/")
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');
        
        return {
            message: `Hello, ${name || 'world!'}!`
        };
    }

    
}