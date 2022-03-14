const express=require('express');


const app=express();
const nav=[
    {
        link:'/index',name:'Home'
    },
    {
        link:'/books',name:'Books'
    },
   
    {
        link:'/admin',name:'Add Book'
    }, 
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addauthors',name:'Add Authors'
    },
    
];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const indexRouter=require('./src/routes/indexRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes');
const signupRouter=require('./src/routes/signupRoutes')
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs')
app.set('views','./src/views')
app.use('/books',booksRouter);
app.use('/index',indexRouter);
app.use('/admin',adminRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/authors',authorsRouter);
app.use('/addauthors',addauthorRouter);



app.get('/',function(req,res){
res.render("home",
{
     nav,
    title:'Library'
})
});
 

   
       

      /*  booksRouter.get('/single',function(req,res){
          res.send("Hey Iam a single page");
        })*/
app.listen(5000);
