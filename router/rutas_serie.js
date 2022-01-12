const express=require('express'),
router=express.Router(),
serie=require('../controllers/controlerSerie');
router.use('/series',serie);
module.exports=router;