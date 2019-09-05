const express = require('express');
var router =express.Router();
router.get('/',(req,res)=>{
    // res.json('sample text');
    res.render("employee/editInsert",{viewTitle:"Insert Employee"});
});
router.post('/insertEdit',(req,res)=>{
    console.log(req.body);
    res.render('employee/editInsert',{viewTitle:"Insert Employee",msg:"Inserted"});
});
module.exports = router;