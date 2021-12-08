var Pelicula=require('../models/peliculas'),
express=require('express'),
router=express.Router();

router.get('/',(req,res)=>{
  Pelicula.find({},(err,docs)=>{
    if(err){
      console.log(err);
      throw err;
    }
    res.status(200).json(docs)
  })
})

module.exports=router;
