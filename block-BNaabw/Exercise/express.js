var express=require('express');
var app=express();

app.listen(4000,()=>
{
    console.log("server is running");
})

app.use(express.json());
app.use(express.static(__dirname + "/assets"))

app.post('/info',(req,res)=>
{
   console.log("info saved");
});

app.get('/required',(req,res)=>
{
    res.send(req.body);
});

app.get('/webpage',(req,res)=>
{
    res.sendFile(__dirname + "/assets/index.html");
});

