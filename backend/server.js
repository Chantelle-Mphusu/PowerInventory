import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors';

const app = express();


dotenv.config();
app.use(express.json());

// Connect to DB
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true });






app.use(
  cors({
    origin: /*["Access-Control-Allow-Origin","http://localhost:3000"]*/ '*',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.get('/', (req, res) => res.send('MERN Inventory API'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));

