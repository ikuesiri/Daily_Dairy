const express = require("express");
const app = express();


// middleware to be able to parse user's input
app.use( express.urlencoded({ extended : true}));
// to diplay static files
app.use( express.static("public"))
//to be apply to used and render ejs template files
app.set("view engine", "ejs");








app.listen( 3000, ()=> console.log(`Server listening at port: 3000`));