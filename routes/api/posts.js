const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Here goes the post query");
})


module.exports = router;