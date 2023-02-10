const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const UserSchema = require('./schemaModels/userSchmea');

// connecting database.
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/test');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));

app.get('/', (req,res)=>{
    res.render('pages/home');
});
app.get('/signUp',(req,res)=>{
    res.render('pages/signUp');
});
app.post('/signUp',async(req,res)=>{
    const {name,email}=req.body;
    const user = new UserSchema({name,email});
    await user.save();
    res.render('pages/createAccount', {user});
});



app.listen(port, function(){
    console.log(`listining on the port :- ${port}!`);
});