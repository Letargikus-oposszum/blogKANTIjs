import express from 'express'
import * as User from '../data/user.js';

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  const users = User.getUsers();
  res.json(users);
});

// userRoutes.get("/users", (req, res) => {
//   const users = db.getUsers();
//   res.json(users);
// });

// userRoutes.get("/users", (req, res) => {
//   const users = db.getUsers();
//   res.json(users);
// });

// userRoutes.get("/users", (req, res) => {
//   const users = db.getUsers();
//   res.json(users);
// });

// userRoutes.get("/users", (req, res) => {
//   const users = db.getUsers();
//   res.json(users);
// });

export default userRoutes;