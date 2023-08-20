import express from "express";
import taskrouter from "./routes/task.js"
import userrouter from "./routes/user.js";// always remember you should give .js extension to the file in the backend , It is not compulsory in frontend
import { connectDb } from "./data/database.js";
import cookieParser from "cookie-parser"
import cors from "cors";
import {config} from "dotenv";// config.env is used for storing secret variables and that "config.env" file can be stored in any location 
import { errorHandle } from "./middlewares/error.js";
                                // just you have to give the path to the below config function . Just like that .
    
// WE are using a MVC structure here , where m  ---->models v---->views/routes c ----->controllers 
const app = express();
config({
    path:"./config.env"
})
connectDb();
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URI],// array of uri to be allowed , from which this api can be accessed
    methods:["GET","POST","PUT","DELETE"],// array of requests that can be made
    credentials:true// if false , you can't send cookie to the frontend , also make with credentials :true in frontend 

}));// For serving the request made through other url i.e. frontend url
app.use(express.json());// this is neccessary to get data from backend , make sure to use before using app.use(router);

app.use("/api/v1/users",userrouter);// this first parameter "/users" is given as default to the router beforehand, and this is neccessary to put
                         // in the app.js . url ko padhkar pata lage kya ho raha isliye , /api/v1
app.use("/api/v1/task",taskrouter);



// app.get("/users/new",async (req,res)=>{     
//     res.send("heelo");
// })

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on ${process.env.PORT} port in ${process.env.NODE_ENV} mode`);
})

// Using error middleware ---> don't use ()
app.use(errorHandle);
// any success or failure  can be sent through next(new Errohand(message,statusCode,success)) , by using this , code will reduce 
// it is only used to reduce the code rebundancy , res.status().json() wali line baar baar likhni nhi padegi 