const express=require('express');
const product=require('../models/product_tbls');
const router=express.Router();

router.get('/',function(req,res,next){
    product.find( { $where : "this.p_qty <= this.buffer_stock"} )
    .then(doc=>{
        if(doc.length>0)
        {
            res.json(doc);
        }
        else
        {
            res.json(doc);
        }
    })
}) 


module.exports=router;