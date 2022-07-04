var express=require('express');
var app=express();
app.get('/',(req,res)=>
{
    res.send("welcome");
})

app.get('/about',(req,res)=>
{
    res.send("welcome to my page");
})

app.listen(3000,()=>
{
    console.log("server is  running");
})