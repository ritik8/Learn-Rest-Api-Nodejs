const express = require('express');
const morgan=require("morgan");
const product=require('./api/routes/products');
const app = express();
app.use(morgan('dev'));
app.use('/product',product);


//let handle the error

app.use((req,res,next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error)
});
app.use((error,req,res,next)=>{
res.status(error.status).json({
    error:{
    message:error.message
    }
})

})

module.exports=app;