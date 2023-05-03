const express = require("express");
const app = express();
//import database configuration
const connectDB = require("./mongoose/DB/connectDB");
const  _ = require("lodash");

//environment variable set up
require("dotenv").config();

//router import
const router = require("./router");

// middleware to be able to parse user's input
app.use( express.urlencoded({ extended : true}));
// to diplay static files
app.use( express.static("public"))
//to be apply to used and render ejs template files
app.set("view engine", "ejs");

//initialize database
connectDB();
// Global Array Variable to store User's messages

app.use("/", router);

app.listen( 3000, ()=> console.log(`Server listening at port: 3000`));



