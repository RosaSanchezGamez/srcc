
var path = require("path");
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
res.sendFile(path.join(__dirname + "/formulario.html"));
});

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
    host: "34.236.196.31",
    user: "root",
    password: "ROsa123*@",
    database: "formulario",
  });
  
  conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });
  
  const puerto = process.env.PUERTO || 3001;
 

app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});
/*
app.get('/logueo',function (req, res) {
  var nombres = req.body.usuario;
  var contrasenia = req.body.contrasenia;
  if(nombres && contrasenia){
    conexion.query('select * from persona where correo = ? and contrasenia = ?',[nombres,contrasenia],async(error,results) =>{
      if(results.length == 0){
        alert("Usuario y/o contraseña incorrecto")
      }else{
        window.location = "paginaWeb.html";
      }
    })
  }
})
*/
app.post('/api/login', function (req, res) {
  var nombres = req.body.usuario;
  var contrasenia = req.body.contrasenia;
  var sql = 'select * from persona where correo = ? and contrasenia = ?';
  conexion.query(sql, [nombres,contrasenia], function (error, results) {
    if (results.length > 0) {
      res.contentType('json').send({
        authenticated: true
      })
    } else {
      res.contentType('json').send({
        authenticated: false
      })
    }
  });
});

app.post("/api/formulario", (req, res) => {
    let data = {
        sres: req.body.sres,
        nombres: req.body.nombres,
        contrasenia: req.body.contrasenia,
        correo: req.body.correo,
        fecha: req.body.fecha,
        
    };

    let sql = "INSERT INTO Persona  SET ?";
    conexion.query(sql, data, function (error, results) {
      if (error) {
        throw error;
      } else {
        console.log(data);
        res.send(data);
      }
    });
});

