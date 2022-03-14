const express=require('express');
const signupRouter=express.Router();
const Usersdata=require('../model/Usersdata')

    signupRouter.get('/',function(req,res){
       
            res.render("signup",{
                
            title:'Library',
        
        })
       
       })
       signupRouter.post('/adduser',function(req,res){
        var item={
   
            uid:req.body.uid,
            pwd:req.body.pwd
           }
           var user=Usersdata(item);
           user.save();//saving to database
           res.redirect('/login');
           
        })
       
      
    
    module.exports= signupRouter;