const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const User = require('./schemaModels/userSchmea');


// connecting database.
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/blogsite');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));

app.get('/', (req,res)=>{
    res.render('pages/home');
});
app.get('/createAccount', (req,res)=>{
    res.render('pages/createAccount');
});
app.post('/createAccount', async(req,res)=>{
    const {fname,lname, email,password,mobile,city,country}= req.body;
    const user = new User({fname,lname, email, password, mobile, city, country});
    await user.save();
    res.send("working");
});



app.listen(port, function(){
    console.log(`listining on the port :- ${port}!`);
});