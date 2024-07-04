//required all dependecies 
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const mongoose = require("mongoose")
const socketIo = require("socket.io");
const io = socketIo(server)
const User = require('./models/user')

//connect database to the project
const databaseUrl = "mongodb://127.0.0.1:27017/chatBot"; 

mongoose
  .connect(databaseUrl)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database not connected", error);
  });
//useing this middleware for getting information by json
app.use(express.json())

//create server on local port
const port = 3000
app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`)
})