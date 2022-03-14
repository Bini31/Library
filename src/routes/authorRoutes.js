
const express=require('express');
const authorsRouter=express.Router();
const Authordata=require('../model/Authordata');
function router(nav)
{
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
    authorsRouter.get('/',function(req,res){
        Authordata.find().then(function(authors){
            res.render("authors",{
                nav,
            title:'Library',
            authors
        })
       
       })
       });
       authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',{
                nav,
        title :'Library',
        author
            })
        })
       
        
    })
    return authorsRouter;
};


module.exports=router;