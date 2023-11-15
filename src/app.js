const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

const initWebRoutes = require("./route/web");

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User connect:  ", socket.id);

  socket.on("join_room", (data) => {
    console.log("Join room :", data);
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    console.log(`Emit to room ${data.room} ,message: ${data.message}`);
    socket.to(data.room).emit("receive_message", data.message);
  });
});

initWebRoutes(app);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
