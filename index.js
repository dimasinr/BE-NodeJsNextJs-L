import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import topBeautyBarRoute from "./routes/topbeautybars.js"
import beautyBarRoute from "./routes/beautybars.js"
import treatmentRoute from "./routes/treatments.js"
import cookieParser from "cookie-parser"
import { createRequire } from 'module';
import path from "path"

const require = createRequire(import.meta.url);

// const serverless = require('serverless-http')

const app = express();
const cors = require('cors');

dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
});

//Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/topbeautybar", topBeautyBarRoute);
app.use("/api/beautybar", beautyBarRoute);
app.use("/api/treatment", treatmentRoute);

// app.use(express.static(path.join(__dirname, "/<front end app folder name>/build")))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,'/<front end app folder name>/build', 'index.html'))
// })

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    // res.send("this is middleware!")     //middleware agar tidak dapat diakses kontennya
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
})

// module.exports.handler = serverless(app);
app.listen(() => {
    connect()
    console.log("connected to backend.");
})