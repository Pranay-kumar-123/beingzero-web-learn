const express = require('express');
const shortid = require("shortid");
const mongoose=require("mongoose");
const app = express();
require("dotenv").config();
app.use(express.static("frontend"));
const course=require("./backend/api/api");
var connectionstring=process.env.connectionstring;


//var connectionstring = "mongodb+srv://Aravind:ar@cluster0.hwvgk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connectionstring);
mongoose.connection.on('connected',function(){
    console.log("MongoDB connected");
})
 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 app.use("/api",course);
// app.user(function(req, res, next){
//     // all requests will go through it
// })
// app.use('/api/special', function(req, res, next){
//     // this is only for apis whose url starts with /api/special
// })
// let todo = [];
// app.get("/api/todos", (req, res) => {
//     res.status(200).json({
//         todo: todo
//     });
// })
// app.get("/api/todos/:todoid", (req, res) => {
//     let id = req.params.todoid;
//     let singletodo = todo.filter(data => (data.id == id))[0];
//     res.status(200).json({
//         singleitem: todo
//     })

// })
// app.post("/api/todos", (req, res) => {
//     let data = req.body;
//     let id = shortid.generate();
//     data.id = id;
//     todo.push(data);
//     res.status(200).json({
//         status: "added",
//         data: data
//     })
// })
// app.put("/api/todos/:todoid", (req, res) => {
//     let id = req.params.todoid;
//     let data = req.body
//     let idx = todo.findIndex((obj => obj.id == id));
//     console.log(req.body)
//     if (data.t == "toggle")
//         todo[idx].isActive = !todo[idx].isActive;
//     else
//         todo[idx].title = data.title;
//     console.log(todo[idx]);

//     res.status(200).json({
//         status: "updated",
//         data: todo[idx]
//     })
// })

// app.delete("/api/todos/:todoid", (req, res) => {
//     let id = req.params.todoid;
//     let idx = todo.findIndex((obj => obj.id == id));
//     let itemdata = todo[idx];
//     todo.splice(idx, 1);
//     res.status(200).json({
//         status: "deleted",
//         data: itemdata
//     })
// })
var path = require('path');
app.get('/:page', function(req, res){
    var ext = path.extname(req.params.page);
    // console.log(ext);
    if(ext=="")
    res.sendFile(__dirname+ '/frontend/html/'+ req.params.page+".html");
    //else  res.sendFile(__dirname+ '/frontend/'+ req.params.page);
})
app.get('/', function(req, res){
    res.sendFile(__dirname+ '/frontend/html/google.html'); 
 })
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
