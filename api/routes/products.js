const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"Get the Product"
    })
})

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:"Create the Product"
    })
})

router.get('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({
        message:"Get the Product",
        id:id

    })
})

router.post('/:productId',(req,res,next)=>{
    const id=req.params.productId;
    res.status(200).json({
        message:"Created the Product",
        id:id,

    })
})

module.exports=router;
