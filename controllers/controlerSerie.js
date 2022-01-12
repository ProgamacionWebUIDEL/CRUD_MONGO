const serie = require('../models/series');

var Serie =require('../models/series'),
express=require('express'),
router=express.Router();

router.post('/',(req,res)=>{
  Serie.find({},(err,docs)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(docs)
  });
});
router.post('/crearserie',(req,res)=>{
  var body=req.body;
  serie.insertMany({
    titulo:body.titulo,
    actor:body.actor,
    n_serie:body.n_serie,
    idioma:body.idioma,
    
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });

});
// elminar series
router.post("/eliminarserie",(req,res)=>{
  serie.remove({
  }, (err,rest)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(rest)
  });
});

//metodo editar

router.post('editarserie',(req,res)=>{
  var body = req.body;
  Serie.updateMany({
    titulo: body.titulo
  },{
    $set:{
    titulo:body.titulo,
    actor:body.actor,
    n_serie:body.n_serie,
    idioma:body.idioma,
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
