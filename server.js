const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const User = require('./schemaModels/userSchmea');
const {storage} = require('./cloudinary/index');
const multer = require("multer");
const upload = multer({storage});


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
app.post('/createAccount', upload.single('image'),async(req,res)=>{
    const {image,fname,lname, email,password,mobile,city,country}= req.body;
    const user = new User({image,fname,lname, email, password, mobile, city, country});
    user.image = req.files.map(p => ({url: p.path, filename: p.filename}))
    await user.save();
    res.redirect(`/${user._id}/profile`);
});
app.get('/:id/profile', async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById(id);
    res.render('pages/profile', {user});
});


app.listen(port, function(){
    console.log(`listining on the port :- ${port}!`);
});