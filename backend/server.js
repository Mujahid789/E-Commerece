import express from 'express';
import colors from 'colors';
import dbConnection from './config/db.js';
import authRouter from './routers/authRoute.js';
import cors from 'cors'

// importing dotenv file 
import dotenv from 'dotenv';

// configuration of dotenv file
dotenv.config();

// creating rest object
const app = express();



//converting plaint / string data to json
app.use(express.json());
app.use(cors());

//Db connection activiated
dbConnection();

// Api end point declaration:
app.use("/api/v1/user" ,authRouter)




const port = process.env.PORT || 5000;

// Listening Server
app.listen(port,()=>{
    console.log(`Server is running at PORT ${port} in ${process.env.App_Dev}`.bgYellow.blue)
})


// mongodb://localhost:27017





