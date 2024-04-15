const express = require('express');
const users = require('./Data');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/users',(req,res)=>{
     res.send(users);
});

app.get('/all',(req,res)=>{
    res.json(users);
})

app.get('/students',(req,res)=>{
    res.render('students',{users});
})

app.listen(4000,()=>{
    console.log("Server Started at port 4000");
})