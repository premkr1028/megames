import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/db.js";
import GameRoute from "./routes/game.route.js";
dotenv.config();
let port = process.env.PORT;
const app = express()
dbConnect()
app.use("/api/v1", GameRoute)
app.listen(port , ()=>{
    console.log("running")
})