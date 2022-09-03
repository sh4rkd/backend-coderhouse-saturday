//get => mostrar informacion
//post => crear informacion
//put => actualizar informacion
//delete => eliminar informacion

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('Bienvenido a mi servidor');
})

app.get("/login",(req,res)=>{
    res.send('Login');
})

app.get("/users/:id",(req,res)=>{
    const {id} = req.params;
    res.send(`El usuario es ${id}`);
})

app.get("/users",(req,res)=>{
    const {id,pais} = req.query;
    res.send(`El usuario es ${id} y el pais es ${pais}`);
})