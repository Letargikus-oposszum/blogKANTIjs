import express from 'express'

const router = express.Router();

router.get("/users", (req, res) => {
  const users = db.getUsers();
  res.json(users);
});


export default router;