// jshint esversion:6
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs"); //partials ko use karne ke liye method import karna tha hbs.registerPartials ie y use kiya ha requirement
require("./db/conn.js");
const User = require('./models/usermessage');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// setting the path 
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

//middlerware
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.static(staticPath)) //yaha pe css ko statically apply kar rhe ha isliye likha ha ase and html ha nahi isliye koi page display nahi hota root pe get request milne par 
app.use(express.urlencoded({extended:false})); 
//telling the express engine that we are using the view engine by setting view engine to hbs
app.set("view engine", "hbs");
app.set("views", templatePath); //jo pehle views tha uska path change ho gaya isliye uska path wapis set kiya ha
hbs.registerPartials(partialPath)

// ----------
app.get("/", function (req, res) {
    res.render("index");
});
const resumeLocation = path.join(__dirname, "../public/resume.html");
app.get("/resume", (req, res)=>{
    res.sendFile(resumeLocation);
})

app.post("/contact", async(req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, function () {
    console.log("Server is up and running on port 3000");
});