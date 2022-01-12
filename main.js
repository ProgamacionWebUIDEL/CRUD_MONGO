const express=require("express");
const app=express();
const index_pelicula= require("./router/rutas_pelicula");
const index_serie= require("./router/rutas_serie");
const connection=require("./config/conexion");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//ruteo de APIS
app.use('/',index_pelicula);
app.use('/',index_serie);
app.get("/hola",(req,res)=>{
  var datos=req.query
  res.json({mensaje:"-----hola Mundi-----"+datos.nombre});
});
app.get("/suma",(req,res)=>{
  console.log(req.query);
  var datos=req.query;
  var suma=Number(datos.n1)+ Number(datos.n2);
  res.json({mensaje:"la respuesta es"+suma});
});
app.get("/resta",(req,res)=>{
  console.log(req.query);
  var datos=req.query;
  var resta=Number(datos.n1)- Number(datos.n2);
  res.json({mensaje:"la resta de los numeros es :"+resta});
});
app.get("/multiplicacion",(req,res)=>{
  console.log(req.query);
  var datos=req.query;
  var mult=Number(datos.num1)* Number(datos.num2);
  res.json({mensaje:"la multiplicacion de los numeros es :"+mult});
});
app.get("/division",(req,res)=>{
  console.log(req.query);
  var datos=req.query;
  var division=Number(datos.n1)- Number(datos.n2);
  res.json({mensaje:"la division de los numeros es :"+resta});
});
app.get("/hola",(req,res)=>{
  var datos=req.query
  res.json({mensaje:"-----Este programa fue realizado por-----"+datos.ingreso});
});
app.listen(3000,()=>{
  console.log("servidor INICIADO")
});