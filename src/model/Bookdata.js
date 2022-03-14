//Accessing Mongoose Package
const mongoose=require('mongoose')
//Database connection
mongoose.connect('mongodb://localhost:27017/LibraryCollection')
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