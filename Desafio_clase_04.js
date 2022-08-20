/*
Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo.
*/
const fs = require('fs');

class Contenedor {
    constructor(nombreArchivo) {
        try{
            fs.accessSync(nombreArchivo);
        }catch(e){
            fs.writeFileSync(nombreArchivo, '');
        }
        this.nombreArchivo = nombreArchivo;
    }
    save(objeto) {
        //generate id with random number if no exist in nombreArchivo add id to objeto
        let archivo = this.getAll();
        let id = 0;
        if (archivo.length > 0) {
            while(archivo.find(obj => obj.id == objeto.id)){
                objeto.id = Math.floor(Math.random() * 100);
                id = objeto.id;
                if(archivo.length >= 100){
                    return -1;
                }
            }
        }else{
            id = Math.floor(Math.random() * 100);
            objeto.id = id;
        }
        archivo.push(objeto);
        this.deleteAll();
        this.saveAll(archivo);
        return id;
    }
    getById(id) {
        let archivo = this.getAll();
        let objeto = archivo.find(obj => obj.id == id);
        return objeto;
    }
    getAll() {
        let archivo = fs.readFileSync(this.nombreArchivo, 'utf8');
        if (archivo == '') {
            return [];
        } else {
            return JSON.parse(archivo);
        }
    }
    deleteById(id) {
        let archivo = this.getAll();
        let objeto = archivo.find(obj => obj.id == id);
        archivo.splice(archivo.indexOf(objeto), 1);
        this.deleteAll();
        this.saveAll(archivo);
    }
    deleteAll() {
        fs.writeFileSync(this.nombreArchivo, '');
    }
    saveAll(archivo) {
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(archivo));
    }
}

const contenedor = new Contenedor('archivo.json');
console.log(contenedor.save({nombre: 'Fred', edad: 27}));
console.log(contenedor.getById(26));
console.log(contenedor.getAll());
contenedor.deleteById(62);
console.log(contenedor.getAll());
contenedor.deleteAll();
console.log(contenedor.getAll());