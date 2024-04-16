const express = require('express');
const users = require('./Model/Data');
const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));


//for testing
app.get('/users',(req,res)=>{
     res.send(users);
});


//for dashboard
app.get('/dashboard',(req,res)=>{
    res.render('dashboard');
})


//for fetching the data
app.get('/all',(req,res)=>{
    res.json(users);
})


//for student's list
app.get('/students',(req,res)=>{
    res.render('students',{users});
})

app.listen(4000,()=>{
    console.log("Server Started at port 4000");
})