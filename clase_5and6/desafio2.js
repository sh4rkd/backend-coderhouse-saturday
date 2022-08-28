const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const getNombres = (productos) => productos.map(producto => producto.nombre);
const precioTotal = (productos) => productos.reduce((total, producto) => total + producto.precio, 0);
const precioPromedio = (productos) => precioTotal(productos) / productos.length;
//find object max precio return object
const precioMaximo = (productos) => productos.reduce((max, producto) => producto.precio > max.precio ? producto : max, { precio: 0 });
const precioMinimo = (productos) => productos.reduce((min, producto) => producto.precio < min.precio ? producto : min, { precio: Infinity });

let objeto = {
    nombres: getNombres(productos),
    precioTotal: precioTotal(productos),
    precioPromedio: precioPromedio(productos),
    precioMaximo: precioMaximo(productos),
    precioMinimo: precioMinimo(productos)
}
console.log(objeto);