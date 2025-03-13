import express from "express";
import { createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("port", (process.env.PORT || 8000))
app.get("/home", (req,res) => {
    return res.json({"hello": "World"})
})

const start = async() => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://rethanya888:vHn6fzjH5qClw4Kx@cluster0.zex9c.mongodb.net/vibio?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("Listening on port 8000")
    })
}

start();