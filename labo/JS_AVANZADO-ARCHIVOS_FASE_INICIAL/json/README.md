# Laboratorio 1: cargar producto
Utilizaremos un objeto JSON para cargar la información dentro de un <article> que representa a un producto
* Leer la propiedad nombre del producto y cargarla dentro del `<h1>`
* Leer la propiedad descripción del producto y cargarla dentro del `<p>`
* Leer la propiedad imagen del producto y cargarla dentro del `<img src="">`
* Leer la propiedad precio del producto y cargarla dentro del `<span class="precio">`
* Asignar la clase `vip` si el producto contiene ese booleano en `true`

# Laboratorio 2: cargar producto por AJAX
Utilizaremos AJAX para cargar el mismo producto asincrónicamente
* Armar una función que realice un pedido `XHR` asincrónico enviando el ID de producto deseado
* Recibir el resultado del pedido con una función que termine reutilizando la carga de producto del laboratorio 1
* BONUS: implementar el evento `click` para imprimir en consola el producto JSON al tocar el botón Agregar

sergio.minutoli@educacionit.com
sergio.minutoli@istea.com.ar