import express, { Express, Request, Response} from "express"; 
import dotenv from "dotenv";


// configuration the .env file
dotenv.config();


// create express app
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the route for of app
app.get('/', (req: Request, res: Response) => {
    //Send Hello World as response
    res.send('Welcome to APP Express + Nodemon + jest + TS + Swagger + Mongoose');
});

// Define the route for of app
app.get('/hello', (req: Request, res: Response) => {
    //Send Hello World as response
    res.send('Welcome to Get Route: Hello World');
});

//Execute App and Listen Request to Port
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});