const express = require('express');
const app = express();
const port = 8082;

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.get("/visitas",(req,res)=>{
    res.send("Hola mundo");
})

app.get("/fyh",(req,res)=>{
    res.send("Hola mundo");
})

const server = app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

server.on("error",error => {
    console.log(error);
})