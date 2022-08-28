/*
Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo.

El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 

*/
const fs = require('fs');

//first version
// class Contenedor {
//     constructor(nombreArchivo) {
        // try{
        //     this.nombreArchivo = nombreArchivo;
        //     this.productos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf8'));
        // }catch(error){
        //     fs.writeFile(nombreArchivo, JSON.stringify([]));
        //     this.productos = [];
        // }
//     }

//     save(producto) {
//         return new Promise((resolve, reject) => {
//             try {
//                 let id = this.productos.length>0 ? this.productos[this.productos.length-1].id + 1 : 0;
//                 producto.id = id;
//                 this.productos.push(producto);
//                 fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
//                 resolve(id);
//             } catch (error) {
//                 reject(error);
//             }
//         }).then(id => {
//             return id;
//         }).catch(error => {
//             return error;
//         });
//     }

//     getById(id) {
//         return new Promise((resolve, reject) => {
//             try {
//                 let producto = this.productos.find(producto => producto.id == id);
//                 resolve(producto);
//             } catch (error) {
//                 reject(error);
//             }
//         }).then(producto => {
//             return producto;
//         }).catch(error => {
//             return error;
//         });
//     }

//     getAll() {
//         return new Promise((resolve, reject) => {
//             try {
//                 resolve(this.productos);
//             } catch (error) {
//                 reject(error);
//             }
//         }).then(productos => {
//             return productos;
//         }).catch(error => {
//             return error;
//         });
//     }

//     deleteById(id) {
//         return new Promise((resolve, reject) => {
//             try {
//                 let producto = this.productos.find(producto => producto.id == id);
//                 this.productos.splice(this.productos.indexOf(producto), 1);
//                 fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
//                 resolve();
//             } catch (error) {
//                 reject(error);
//             }
//         }).then(() => {
//             return;
//         }).catch(error => {
//             return error;
//         });
//     }

//     deleteAll() {
//         return new Promise((resolve, reject) => {
//             try {
//                 this.productos = [];
//                 fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
//                 resolve();
//             } catch (error) {
//                 reject(error);
//             }
//         }).then(() => {
//             return;
//         }).catch(error => {
//             return error;
//         });
//     }
// }

// const printConsole = async (productos) => {
//     console.log(await productos);
// }

// const contenedor = new Contenedor('productos.txt');

// contenedor.save({                                                                                                                                                    
//       title: 'Escuadra',                                                                                                                                 
//       price: 123.45,                                                                                                                                     
//       thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                          
// });
// contenedor.save({                                                                                                                                                    
//     title: 'Calculadora',                                                                                                                              
//     price: 234.56,                                                                                                                                     
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                                                                                                                                                                        
// });
// contenedor.save({                                                                                                                                                    
//     title: 'Globo Terráqueo',                                                                                                                          
//     price: 345.67,                                                                                                                                     
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                    
// });

// printConsole(contenedor.getById(1));
// printConsole(contenedor.getById(2));
// printConsole(contenedor.getAll());

// contenedor.deleteById(1);
// printConsole(contenedor.getAll());

// contenedor.deleteAll();
// printConsole(contenedor.getAll());

// second version
class Contenedor {
    constructor(nombreArchivo) {
        try{
            this.nombreArchivo = nombreArchivo;
            this.productos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf8'));
        }catch(error){
            fs.writeFile(nombreArchivo, JSON.stringify([]));
            this.productos = [];
        }
    }

    save(producto) {
        let id = this.productos.length>0 ? this.productos[this.productos.length-1].id + 1 : 0;
        producto.id = id;
        this.productos.push(producto);
        fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
        return id;
    }

    getById(id) {
        return this.productos.find(producto => producto.id == id);
    }

    getAll() {
        return this.productos;
    }

    deleteById(id) {
        let producto = this.productos.find(producto => producto.id == id);
        this.productos.splice(this.productos.indexOf(producto), 1);
        fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
    }

    deleteAll() {
        this.productos = [];
        fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
    }

    update(producto) {
        let index = this.productos.findIndex(p => p.id == producto.id);
        this.productos[index] = producto;
        fs.writeFile(this.nombreArchivo, JSON.stringify(this.productos));
    }
}

const contenedor = new Contenedor('productos.txt');

contenedor.save({
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
});
contenedor.save({
    title: 'Calculadora',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
});
contenedor.save({
    title: 'Globo Terráqueo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
});

console.log(contenedor.getById(1));
console.log(contenedor.getById(2));

contenedor.update({
    id: 1,
    title: 'Escuadra',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
});

console.log(contenedor.getById(1));