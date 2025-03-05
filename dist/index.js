"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// configuration the .env file
dotenv_1.default.config();
// create express app
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// Define the route for of app
app.get('/', (req, res) => {
    //Send Hello World as response
    res.send('Welcome to APP Express + Nodemon + jest + TS + Swagger + Mongoose');
});
// Define the route for of app
app.get('/hello', (req, res) => {
    //Send Hello World as response
    res.send('Welcome to Get Route: Hello World');
});
//Execute App and Listen Request to Port
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map