var mongoose=require('mongoose');
Schema=mongoose.Schema;

var serieSchema= new mongoose.Schema({

titulo:{type:String},
actor:{type:String},
n_serie:{type:Number},
idioma:{type:String},
});
var serie= mongoose.model('serie',serieSchema);
module.exports=serie;
