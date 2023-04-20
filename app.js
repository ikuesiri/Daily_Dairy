const express = require("express");
const app = express();

// middleware to be able to parse user's input
app.use( express.urlencoded({ extended : true}));
// to diplay static files
app.use( express.static("public"))
//to be apply to used and render ejs template files
app.set("view engine", "ejs");

const  welcomeContent = require("./customMssgs/welcome.mssg")
const contactContent = require("./customMssgs/contact.mssg");
const aboutContent = require("./customMssgs/about.mssg");

//@desc method: GET |  route: "/"
app.get("/", (req, res) =>{
    res.render("home", {
        welcomeContent
    });
});

//@desc method: GET |  route: "/contact"
app.get("/contact", (req, res) =>{
    res.render("contact", {
        contactContent
    });
});


//@desc method: GET |  route: "/about"
app.get("/about", (req, res) =>{
    res.render("about", {
        aboutContent
    });
});




app.listen( 3000, ()=> console.log(`Server listening at port: 3000`));