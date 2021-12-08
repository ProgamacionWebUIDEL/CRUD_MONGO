var mongoose=require('mongoose');
Schema=mongoose.Schema;

var peliculaSchema= new mongoose.Schema({

nombre:{type:String},
director:{type:String},
anio_estreno:{type:Number},
idioma:{type:String},
Lugar:{type:String},
reparto:{type:String}

});
var pelicula= mongoose.model('pelicula',peliculaSchema);
module.exports=pelicula;
