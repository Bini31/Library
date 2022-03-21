//Accessing Mongoose Package
const mongoose=require('mongoose')
//Database connection
mongoose.connect('mongodb+srv://userone:userone@libraryappcasestudy2022.rmfml.mongodb.net/LibraryCollection?retryWrites=true&w=majority')
//Schema definition
const Schema=mongoose.Schema;
const BookSchema=new Schema({
    title:String,
    author:String,
    genre:String,
    image:String
});
//Model creation
var Bookdata=mongoose.model('bookdata',BookSchema);
module.exports=Bookdata;
