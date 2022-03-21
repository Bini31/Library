//Accessing Mongoose Package
const mongoose=require('mongoose')
//Database connection
mongoose.connect('mongodb+srv://userone:Password@libraryappcasestudy2022.rmfml.mongodb.net/LibraryCollection?retryWrites=true&w=majority')
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
