import express from 'express'
import * as Post from '../data/post.js';

const postRoutes = express.Router();


postRoutes.get("/", (req, res) => {
  const users = Post.getPosts();
  res.json(users);
});

// postRoutes.get("/posts", (req, res) => {
//   const users = db.getPosts();
//   res.json(users);
// });

// postRoutes.get("/posts", (req, res) => {
//   const users = db.getPosts();
//   res.json(users);
// });

// postRoutes.get("/posts", (req, res) => {
//   const users = db.getPosts();
//   res.json(users);
// });

// postRoutes.get("/posts", (req, res) => {
//   const users = db.getPosts();
//   res.json(users);
// });


export default postRoutes;