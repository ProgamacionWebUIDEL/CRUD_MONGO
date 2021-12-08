const express=require('express'),
router=express.Router(),
pelicula=require('../controllers/controlerPelicula');
router.use('/peliculas',pelicula);
module.exports=router;