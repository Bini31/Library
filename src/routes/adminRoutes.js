const express=require('express');
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav,upload){
adminRouter.get('/',function(req,res){
    res.render('addBook',{
        nav,
        upload,
        title:'Library'
    })
})
adminRouter.post('/add',upload.single('image'),function(req,res){
  
  
   var item={
    title:req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.file.originalname
   }
   var book=Bookdata(item);
   book.save();//saving to database
   res.redirect('/books');
   
})
return adminRouter;
}
module.exports=router;
