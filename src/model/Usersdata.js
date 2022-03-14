//Accessing Mongoose Package
const mongoose=require('mongoose')
//Database connection
mongoose.connect('mongodb://localhost:27017/LibraryCollection')
//Schema definition
const Schema=mongoose.Schema;
const UsersSchema=new Schema({
    uid : String,
    pwd: String
  
});
//Model creation
var Usersdata=mongoose.model('usersdata',UsersSchema);
module.exports=Usersdata;