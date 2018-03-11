var express = require('express');
var router = express.Router();
var users = require('../models/users');



router.get('/',(req,res,next)=>{
    //res.json({ message:res.locals.test});
    users.getAllusers((err,result)=>{
        if(err)  res.json(err);
        else res.json(result);
    })
});




module.exports = router;