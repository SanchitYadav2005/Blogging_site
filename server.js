const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const port = 8080;
const path = require('path');
const methodOverride = require('method-override');

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
app.post('/signUp',(req,res)=>{
    const {name,email}=req.body;
    console.log(name);
    console.log(email);
    res.redirect("/");
})


app.listen(port, function(){
    console.log(`listining on the port :- ${port}!`);
});