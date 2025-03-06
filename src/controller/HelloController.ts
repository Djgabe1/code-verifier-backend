import { BasicResponse } from "./types";
import { IHelloController } from "./Interfaces";
import { LogSuccess } from "../utils/logger";

export class HelloController implements IHelloController {
    
    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');
        return {
            message: `Hello, ${name || 'world!'}!`
        };
    }

    
}