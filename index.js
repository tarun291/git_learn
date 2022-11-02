const express=require('express')
const app=express()
const port=300;
app.get('/',function process(req,res){
    res.send("Hi");
})


app.get('/about',function process(req,res){
    res.send("Hello");
})
app.listen(port, function process(){
    console.log(`Listening port is http://localhost:${port}`);
})