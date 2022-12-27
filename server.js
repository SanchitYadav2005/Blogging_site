const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.set('view engine', 'ejs');
app.use

app.get('/', (req,res)=>{
    res.send("server is working");
});


app.listen(port, function(){
    console.log(`listining on the port :- ${port}!`);
});