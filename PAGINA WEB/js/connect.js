var path = require("path");
var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");


app.use(express.static('PAGINA WEB'));
app.get("/",(req,res) =>{
res.sendFile(path.join(__dirname + "/vistas/formulario.html"));
});

app.use(express.json());
app.use(cors());

var conexion = mysql.createConnection({
    host: "localhost",
    user: "rosa",
    password: "rosa2023",
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
app.post("/api/formulario", (req, res) => {
	let data = {
      sres: req.body.sres,
      nombres: req.body.nombres,
      contrasenia: req.body.contrasenia,
      correo: req.body.correo,
      fechaNacimiento: req.body.fechaNacimiento,
    	
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
