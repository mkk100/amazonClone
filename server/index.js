const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./models/User.js')
require('dotenv').config()
const secret = bcrypt.genSaltSync(10);
const jwtSecret = ';lkj1lk2jlk12jdf';
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5501/',
}))
mongoose.connect(process.env.MONGO_URL)
app.post('/register', async (req,res)=>{
    const {email,pw} = req.body;
    try {
        const user = await User.create({
            email,
            password: bcrypt.hashSync(pw, secret)
        })
        res.json(user)
    }
    catch (e){
        res.status(422).json(e);
    }
})

app.post('/login', async (req,res)=>{
    const {email, pw} = req.body;
    const userDoc = await User.findOne({email})
    if(userDoc) {
        const passOk = bcrypt.compareSync(pw, userDoc.password)
        if (passOk){
            jwt.sign({email: userDoc.email, id: userDoc._id}, jwtSecret, {}, (err, token)=>{
                if (err) throw err;
                res.cookie('token',token).json('pass ok');
            })
        }
        else{
            res.status(422).json('pw not ok')
        }
        
    } else {
        res.json('not found')
    }
})
 
app.listen(4000);