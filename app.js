const express = require("express");
const color = require("colors");
const dotenv = require("dotenv");
path = require("path")
const app = express();


// Config dotenv 
dotenv.config({ path: "./config/config.env" });

// App.use is used to set up middleware
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000

app.listen(
    PORT,
    console.log(
        `Server is running on ${process.env.NODE_ENV} mode at port localhost:${PORT}`.yellow.bold
    )
)
