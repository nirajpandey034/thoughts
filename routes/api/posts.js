const express = require('express');
const Post = require('../../models/Post');

const router = express.Router();

router.post('/',(req,res)=>{

     const {mood, text} = req.body;
    let myPost = new Post({
        mood,
        text
    });

     myPost.save()
    .then(()=>{
        res.send("Post successfully created")
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})


module.exports = router;