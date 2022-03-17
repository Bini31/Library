const express=require('express');
const userindexRouter=express.Router();

    userindexRouter.get('/',function(req,res){
        res.render("userindex",{
            
        
        
    })
})



module.exports=userindexRouter;;