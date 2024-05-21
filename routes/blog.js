const express =require("express");
const router =express.Router();

//import controller
const { dummyLink, likePost, unlikePost } = require("../controllers/likeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/PostController");


//route mapping
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);


module.exports =router;