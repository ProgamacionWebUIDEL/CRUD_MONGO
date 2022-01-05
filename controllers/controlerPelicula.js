const pelicula = require('../models/peliculas');

var Pelicula=require('../models/peliculas'),
express=require('express'),
router=express.Router();

router.post('/',(req,res)=>{
  Pelicula.find({},(err,docs)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(docs)
  });
});
router.post('/crearpelicula',(req,res)=>{
  var body=req.body;
  pelicula.insertMany({
    nombre:body.nombre,
    director:body.director,
    anio_estreno:body.anio_estreno,
    idioma:body.idioma,
    Lugar:body.Lugar,
    reparto:body.reparto
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });

});
// elminar peliculas
router.post("/eliminarpelicula",(req,res)=>{
  pelicula.remove({
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });
});

//metodo editar

router.post('editarpelicula',(req,res)=>{
  var body = req.body;
  Pelicula.updateMany({
    nombre: body.nombre
  },{
    $set:{
      director:body.director,
      anio_estreno:body.anio_estreno,
      idioma:body.idioma,
      Lugar:body.Lugar,
      reparto:body.reparto
    }
    
  },(err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });
});
module.exports=router;
