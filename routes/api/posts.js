const express = require('express');
const Post = require('../../models/Post');

const router = express.Router();

//fetching the posts
router.get('/',(req, res) => {
    Post.find(function(err, posts) {
        if (err) 
            res.send("Some error occured while fetching the posts")

        res.send(posts);
    });
})
//saving the posts, request will contain (username, mood and text)
router.post('/',(req,res)=>{

    let myPost = new Post(req.body);
     myPost.save()
    .then(()=>{
        res.send("Post successfully created")
    })
    .catch(err=>{
        res.status(400).send("Unable to Post");
    })
})


module.exports = router;