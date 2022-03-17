const express=require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata')
function router(nav,upload){
addauthorRouter.get('/',function(req,res){
    res.render('addAuthors',{
        nav,
        upload,
        title:'Library'
    })
})
addauthorRouter.post('/add', upload.single('image'),function(req,res){
  
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