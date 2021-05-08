const express = require('express');

const app = express();
app.use(express.static("frontend"));


app.get("/resume", function(req, res){
    res.sendFile(__dirname + "/frontend/html/resume.html");
})
app.get("/color", function(req, res){
    res.sendFile(__dirname + "/frontend/html/color.html");
})
app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/html/google.html");
})
app.get("/apple", function(req, res){
    res.sendFile(__dirname + "/frontend/html/apple.html");
})
app.get("/form", function(req, res){
    res.sendFile(__dirname + "/frontend/html/form.html");
})
app.get("/succes", function(req, res){
    res.sendFile(__dirname + "/frontend/html/succes.html");
})
app.get("/login", function(req, res){
    res.sendFile(__dirname + "/frontend/html/login.html");
})
app.get("/chart", function(req, res){
    res.sendFile(__dirname + "/frontend/html/chart.html");
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
