var express = require('express');
var router = express.Router();

//products 
var products = require('../models/products');

router.get('/',(req,res,next)=>{
    //res.status(200).json({ message:"Product API Works"});
    res.json({ message:"Product API Works"});
});



module.exports = router;