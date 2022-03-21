//Accessing Mongoose Package
const mongoose=require('mongoose')
//Database connection
mongoose.connect('mongodb+srv://userone:Password@libraryappcasestudy2022.rmfml.mongodb.net/LibraryCollection?retryWrites=true&w=majority')
//Schema definition
const Schema=mongoose.Schema;
const UsersSchema=new Schema({
    uid : String,
    pwd: String
  
});
//Model creation
var Usersdata=mongoose.model('usersdata',UsersSchema);
module.exports=Usersdata;
