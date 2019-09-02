var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//hacerlo sin jade
/* app.get("/",function(req,res){
    res.send("Hola Mundo");
}); */

//crearmos un archivo staticos, carpeta public, esset, 
app.use(express.static('public'));
//libreria para recibir parametros por formularios, por json y por URL o POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

//declaramos el motor de vistas que usaremos
app.set("view engine", "jade");

//declaramos la ruta raiz y renderizamos la vista llamada indedx 
//y enviamos el parametro "saludo"  
app.get("/",function(req,res){
    res.render("index",{saludo: "Bienvenido Toro"});
});

//declaracion de una ruta tipo GET
app.get("/login",function(req,res){
    res.render("login");
})

//declaracion de una ruta tipo POST
app.post("/login",function(req,res){
    console.log("Correo:"+ req.body.email);
    console.log("Clave:"+req.body.password);
    res.send("Recibimos tus datos");
})

//establecemos el puerto 8080 para el servidor
app.listen(8080);