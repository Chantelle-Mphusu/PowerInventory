const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

// Connect to DB
mongoose.connect(process.env.MONGO_URI, 
    { useNewUrlParser: true, 
        useUnifiedTopology: true });


app.get('/', (req, res) => res.send('MERN Inventory API'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port ${PORT}"));

