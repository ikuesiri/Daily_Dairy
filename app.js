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


// Global Array Variable to store User's messages
const posts = [];

//@desc method: GET |  route: "/"
app.get("/", (req, res) =>{
    res.render("home", {
        welcomeContent,
        posts
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

//@desc method: GET | route "/create"
app.get("/create", (req, res)=>{
     res.render("create");
})

//@desc method: POST | route "/create"
app.post("/create", (req, res)=>{
    const post =  {
        title : req.body.title,
        content: req.body.content
    }
     posts.push(post);
     res.redirect("/");
})

app.listen( 3000, ()=> console.log(`Server listening at port: 3000`));



