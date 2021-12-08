var mongoose= require('mongoose');
var connection=mongoose.connect("mongodb+srv://mherrera:fqMB513lhBzO9FoC@cluster0.htkcs.mongodb.net/Sistema?retryWrites=true&w=majority");
//fqMB513lhBzO9FoC
mongoose.connection.on('open',(ref)=>{
  console.log("C O N E C T A D O   A   M O N G O "); 
});
module.exports=connection;