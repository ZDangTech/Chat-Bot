const express = require("express");
const color = require("colors");
const dotenv = require("dotenv");
const path = require("path")
const dialogflow = require("@google-cloud/dialogflow") // Free AI Bot API of Google
const socketio = require("socket.io"); // Real time library
const uuid = require("uuid"); // Universal Unique Identifier, identify objects on the Internet 

const PORT = process.env.PORT || 3000

const app = express();
// Config dotenv 
dotenv.config({ path: "./config/config.env" });

// App.use is used to set up middleware
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(
    PORT,
    console.log(
        `Server is running on ${process.env.NODE_ENV} mode at port localhost:${PORT}`.yellow.bold
    )
)

const io = socketio(server);
io.on("connection", function (socket) {
    console.log("A user connected");

    socket.on("Chat message", (message) => {
        console.log(message);
    })
})
