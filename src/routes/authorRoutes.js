
const express=require('express');
const authorsRouter=express.Router();
const Authordata=require('../model/Authordata');
function router(nav)
{
  
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

    //router to edit author
authorsRouter.post('/edit', function (req, res) {

    Authordata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editauthor', {
                nav,
                title :'Library',
               data,
               
            })
            console.log(data);
        }
    })
})

//router to update author
authorsRouter.post('/update', function (req, res) {

    Authordata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
        if (err) {
            res.json({ status: "Failed" });
        }
        else if (data.n == 0) {
            res.json({ status: "No match Found" });
        }
        else {
            res.redirect("/authors")
        }

    })  
})

//router to delete author
authorsRouter.post('/delete', function (req, res) {

    const id = req.body.id;  

    Authordata.findOneAndDelete({ _id: id })
        .then(function () {

            res.redirect('/authors')

        })  
})



    return authorsRouter;
};


module.exports=router;