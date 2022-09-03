const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

app.get("/api/sums/:num1/:num2",(req,res)=>{
    const {num1,num2} = req.params;
    const sums = parseInt(num1) + parseInt(num2);
    res.send(`The sums is ${sums}`);
})
app.get("/api/sums",(req,res)=>{
    const {num1,num2} = req.query;
    const sums = parseInt(num1) + parseInt(num2);
    res.send(`The sums is ${sums}`);
})
app.get("/api/operation",(req,res)=>{})
app.post("/api",(req,res)=>{})
app.put("/api",(req,res)=>{})
app.delete("/api",(req,res)=>{})