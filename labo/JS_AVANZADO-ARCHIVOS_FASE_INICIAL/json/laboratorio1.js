// Code goes here
var objeto = {
  id: 1,
  title: 'Guisito de lentejas',
  description: 'Un guiso como los que hace la nona, para <em>chuparse los dedos</em>',
  price: 250,
  photo: 'http://lorempixel.com/200/200/food/'
};

var articulo; //seleccionar el article del DOM
dibujarProducto(articulo, objeto);

function dibujarProducto(elementoDOM, producto){
  console.log(producto);
  // Leer la propiedad nombre del producto y cargarla dentro del `<h1>`
  // Leer la propiedad descripción del producto y cargarla dentro del `<p>`
  // Leer la propiedad imagen del producto y cargarla dentro del `<img src="">`
  // Leer la propiedad precio del producto y cargarla dentro del `<span class="precio">`
  // Asignar la clase `vip` si el producto contiene ese booleano en `true`
}