const express = require('express');
const cors = require('cors');
const app = express();
const http  = require('http')
const socketIo = require('socket.io')


const  users = [{}];


const port = 4500 || process.env.PORT
const server = http.createServer(app)
app.use(cors());
const io = socketIo(server)

app.get("/",(req,resp)=>{
    resp.send("server is working correctly")
})

io.on("connection",(socket)=>{
    console.log("new connection")

    socket.on('joined',({user})=>{
        users[socket.id] = user;
        socket.broadcast.emit('userJoined',({user:"Admin",message:`${users[socket.id]}  has joined`}))
        socket.emit('welcome',({user:"Admin",message:`welcome to the Chat ${users[socket.id]}`}))
        console.log(`${user} has joined`)
     })

     socket.on("message",({message,id})=>{
        io.emit("sendMessage",{user:users[id],message,id})
     })

    socket.on("disconnect",()=>{
        socket.broadcast.emit("leave",({user:"Admin",message:`${users[socket.id]} has left`}))
        console.log("user left")
    })
   
   
})



server.listen(port,()=>{
    console.log(`server is working on ${port}`)
})


