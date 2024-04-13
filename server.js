const express = require('express');
const users = require('./Data');
const app = express();

app.use(express.static('public'));

app.get('/users',(req,res)=>{
     res.send(users);
});

app.listen(4000,()=>{
    console.log("Server Started at port 4000");
})