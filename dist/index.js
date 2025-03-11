"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//* Environment Variables
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./src/server/index"));
const logger_1 = require("./src/utils/logger");
//* Configuration the .env file
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
//* Start the server
index_1.default.listen(PORT, () => {
    (0, logger_1.LogSuccess)(`[SERVER ON] is running on http://localhost:${PORT}/api`);
});
// * COntrol SERVER ERROR
index_1.default.on("error", (error) => {
    (0, logger_1.LogError)(`Error on the server: ${error}`);
});
//# sourceMappingURL=index.js.map