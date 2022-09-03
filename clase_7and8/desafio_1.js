const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const phrase = "Hi, world, I'm a server";

app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
})

app.get("/api/phrase",(req,res)=>{
    res.send(phrase);
})

app.get("/api/letters/:num",(req,res)=>{
    const {num} = req.params;
    const letters = phrase.split("");
    res.send(letters[num]);
})

app.get("/api/words/:num",(req,res)=>{
    const {num} = req.params;
    const words = phrase.split(" ");
    res.send(words[num]);
})