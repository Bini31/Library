const express=require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata')
function router(nav){
addauthorRouter.get('/',function(req,res){
    res.render('addAuthors',{
        nav,
        title:'Library'
    })
})
addauthorRouter.post('/add',function(req,res){
   // res.send("Hey iam added");
   /*var item={
    title:req.query.title,
    author:req.query.author,
    genre:req.query.genre,
    image:req.query.image
   }
   var book=Bookdata(item);
   book.save();//saving to database
   res.redirect('/books');*/
   //res.send("Hey iam added|||");
   var item={
   
    author:req.body.author,
    image:req.body.image,
    about:req.body.about
   }
   var author=Authordata(item);
   author.save();//saving to database
   res.redirect('/authors');
   
})
return addauthorRouter;
}
module.exports=router;