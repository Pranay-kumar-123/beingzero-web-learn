const express = require('express');
const shortid = require("shortid");

const app = express();
app.use(express.static("frontend"));

//T0O MAKE IT API SERVER
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
// app.user(function(req, res, next){
//     // all requests will go through it
// })
// app.use('/api/special', function(req, res, next){
//     // this is only for apis whose url starts with /api/special
// })
let todo = [];
app.get("/api/todos", (req, res) => {
    res.status(200).json({
        todo: todo
    });
})
app.get("/api/todos/:todoid", (req, res) => {
    let id = req.params.todoid;
    let singletodo = todo.filter(data => (data.id == id))[0];
    res.status(200).json({
        singleitem: todo
    })

})
app.post("/api/todos", (req, res) => {
    let data = req.body;
    let id = shortid.generate();
    data.id = id;
    todo.push(data);
    res.status(200).json({
        status: "added",
        data: data
    })
})
app.put("/api/todos/:todoid", (req, res) => {
    let id = req.params.todoid;
    let data = req.body
    let idx = todo.findIndex((obj => obj.id == id));
    console.log(req.body)
    if (data.t == "toggle")
        todo[idx].isActive = !todo[idx].isActive;
    else
        todo[idx].title = data.title;
    console.log(todo[idx]);

    res.status(200).json({
        status: "updated",
        data: todo[idx]
    })
})
app.delete("/api/todos/:todoid", (req, res) => {
    let id = req.params.todoid;
    let idx = todo.findIndex((obj => obj.id == id));
    let itemdata = todo[idx];
    todo.splice(idx, 1);
    res.status(200).json({
        status: "deleted",
        data: itemdata
    })
})
app.get("/resume", function(req, res){
    res.sendFile(__dirname + "/frontend/html/resume.html");
})
app.get("/color", function(req, res){
    res.sendFile(__dirname + "/frontend/html/color.html");
})
app.get("/", function(req, res){
    res.sendFile(__dirname + "/frontend/html/google.html");
    
})
app.get("/todoapi", function(req, res){
    res.sendFile(__dirname + "/frontend/html/todoapi.html");
    
})
app.get("/login1", function(req, res){
    res.sendFile(__dirname + "/frontend/html/login1.html");
    
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
app.get("/todo", function(req, res){
    res.sendFile(__dirname + "/frontend/html/todo.html");
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
