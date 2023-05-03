const express = require("express");
const router = express.Router();
const Compose = require("./mongoose/models/default.model")
const  welcomeContent = require("./customMssgs/welcome.mssg")
const contactContent = require("./customMssgs/contact.mssg");
const aboutContent = require("./customMssgs/about.mssg");

//@desc method: GET |  route: "/"
router.get("/", async(req, res) =>{          
    const posts = await Compose.find({}); 
  try {
        res.render("home", {
            welcomeContent,
            posts
        });
  } catch (error) {
    console.log(error)
  }      
});

//@desc method: GET |  route: "/contact"
router.get("/contact", async(req, res) =>{
    res.render("contact", {
        contactContent
    });  
});


//@desc method: GET |  route: "/about"
router.get("/about", async(req, res) =>{
    res.render("about", {
        aboutContent
    });
});

//@desc method: GET | route "/create"
router.get("/create", (req, res)=>{
     res.render("create");
})

//@desc method: POST | route "/create"
router.post("/create", async(req, res)=>{
    const newPost =  new Compose({
        title: req.body.title,
        content : req.body.content
    })
    await newPost.save();
    
     res.redirect("/");
})


router.get("/posts/:id", async(req, res) =>{
    const requestedId = req.params.id;
    const post = await Compose.findOne({_id: requestedId });
            res.render("posts", {
                title : post.title,
                content: post.content
            })
})

module.exports = router; 