//* Environment Variables
import dotenv from "dotenv";
import server from "./src/server/index";
import { LogError, LogSuccess } from "./src/utils/logger";

//* Configuration the .env file
dotenv.config();

const PORT = process.env.PORT || 8000;

//* Start the server
server.listen(PORT, () => {
    LogSuccess(`[SERVER ON] is running on http://localhost:${PORT}/api`);
});

// * COntrol SERVER ERROR

server.on("error", (error: any) => {
    LogError(`Error on the server: ${error}`);
}
);