//Accessing Mongoose Package
const mongoose=require('mongoose')
//Database connection
mongoose.connect('mongodb://localhost:27017/LibraryCollection')
//Schema definition
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author : String,
    image: String,
    about: String
});
//Model creation
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;