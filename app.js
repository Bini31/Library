const express=require('express');
const path=require('path')

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
    {
        link:'/login',name:'LogOut'
    },
    
];
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,files,cb)=>{
        cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
console.log(file);

const image=file.originalname;
console.log(image);

//cb(null,Date.now()+path.extname(file.originalname));
cb(null,image);

    }
})
const upload=multer({storage:storage});
const booksRouter=require('./src/routes/bookRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const indexRouter=require('./src/routes/indexRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav,upload);
const loginRouter=require('./src/routes/loginRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const userauthorsRouter = require('./src/routes/userauthorsRoutes');
const userbooksRouter = require('./src/routes/userbooksRoutes');
const userindexRouter = require('./src/routes/userindexRoutes');


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
app.use('/userindex',userindexRouter)
app.use('/userbooks',userbooksRouter);
app.use('/userauthors',userauthorsRouter);



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
