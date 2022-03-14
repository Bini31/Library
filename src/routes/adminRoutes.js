const express=require('express');
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){
adminRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        title:'Library'
    })
})
adminRouter.post('/add',function(req,res){
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
    title:req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.body.image
   }
   var book=Bookdata(item);
   book.save();//saving to database
   res.redirect('/books');
   
})
return adminRouter;
}
module.exports=router;