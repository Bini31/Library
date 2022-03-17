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
           
            if(checkuser.uid=="admin@gmail.com" && checkuser.pwd=="admin")
           {
               res.redirect('/index')

           }
           else{
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
                res.redirect('/userindex')
            }
            else if(flag==false)
            {
                res.redirect('/signup')
            }
           
           })
        }  
      
    });
    
    
    
    
    module.exports=loginRouter;

