
const express=require('express');
const userauthorsRouter=express.Router();
const Authordata=require('../model/Authordata');

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
    userauthorsRouter.get('/',function(req,res){
        Authordata.find().then(function(authors){
            res.render("userauthors",{
            
            title:'Library',
            authors
        })
       
       })
       });
       userauthorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('userauthor',{
            
        title :'Library',
        author
            })
        })
       
        
    })
   


module.exports=userauthorsRouter;