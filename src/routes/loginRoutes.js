const express=require('express');
const loginRouter=express.Router();
const Usersdata=require('../model/Usersdata')

   
    loginRouter.get('/',function(req,res){
       
        res.render('login',{
           
    title :'Library',
    
        })
       
       })
       loginRouter.get("/check",function(req,res){

        var checkuser={
   
            uid:req.query.uid,
           pwd:req.query.pwd
           }
           var flag=false;
           console.log(checkuser);
           Usersdata.find().then(function(users){
               for(let i=0;i<users.length;i++)
               {
            if(checkuser.uid==users[i].uid && checkuser.pwd==users[i].pwd)
            {
                
              flag=true;
              break;
           
            }
            else{
              flag=false;
                
                }
            }  
            if(flag==true){
                res.redirect('/index')
            }
            else
            {
                res.redirect('/signup')
            }
           })
           
      
    });
    
    
    
    
    module.exports=loginRouter;

