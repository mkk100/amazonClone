const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5501/',
}))
mongoose.connect(process.env.MONGO_URL)
app.post('/test',(req,res)=>{
    const {email,pw} = req.body;
    res.json({email,pw});
}) 

app.listen(4000);