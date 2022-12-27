const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res)=>{
    res.send("server is working");
});
app.listen(port, function(){
    console.log(`listining on the port :- ${port}!`);
});