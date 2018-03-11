var express = require('express');
var router = express.Router();

//products 
var orders = require('../models/orders');

router.get('/',(req,res,next)=>{
    //res.status(200).json({ message:"Product API Works"});
    res.json(orders);
});



module.exports = router;