import express from 'express'
import cors from 'cors'
import postRoutes from "../routes/postRoutes.js"
import userRoutes from "../routes/userRoutes.js"
import "dotenv/config";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts",postRoutes);
app.use("/users",userRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on port: ${PORT}`)
})