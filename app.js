var express = require("express");

var app = express();

//hacerlo sin jade
/* app.get("/",function(req,res){
    res.send("Hola Mundo");
}); */

app.set("view engine", "jade");

app.get("/",function(req,res){
    res.render("index", {saludo:"hola mundo Toro"});
})
app.listen(8080);