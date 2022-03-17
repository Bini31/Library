const express=require('express');
const userbooksRouter=express.Router();
const Bookdata=require('../model/Bookdata');

    /*var books = [
        {
            title:"Tom and Jerry",
            author:"Joseph Barbera",
            genre:"Cartoon",
            img:"tom.jpg"
        },
        {
           title:"Harry Potter",
           author:"J.K.Rowling",
           genre:"Fantacy",
           img:"harry.jpg"
       },
       {
           title:"My Life In Full",
           author:"Indira Luyi",
           genre:"Autobiography",
           img:"Indira.jpg"
       }
    ]*/
    userbooksRouter.get('/',function(req,res){
        Bookdata.find().then(function(books){
            res.render("userbooks",{
            title:'Library',
            books
        })
       
       })
       });
       userbooksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('userbook',{
        title :'Library',
        book
            })
        })
       
        
    })
  

module.exports=userbooksRouter;