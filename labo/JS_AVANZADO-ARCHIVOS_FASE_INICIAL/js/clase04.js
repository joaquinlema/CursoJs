$(function () {
	
	$.ajax({
		"type": "GET",   /*"method": "GET",*/
		"url": "json/ajax/productos/productosJson.json",
		"dataType": "json",
		"success": construirSitio,
		"error": function(error_ocurrido){
			console.log(error_ocurrido);
		},
		"complete": function(){
			console.log("termino!");
		}
	});

})

function construirSitio(productosElem) {

//A partir de la clonación del nodo ".producto", mostrar el listado de productos en el nodo "#listadoProductos".
var nodo_producto = document.querySelector('.producto').cloneNode(true);
var nodo_productos = document.querySelector('#listadoProductos')

nodo_productos.innerHTML = "";

var i;

	for(i = 0; i < productosElem.length; i++){

		var productoItem = nodo_producto.cloneNode(true);

		productoItem.id = productosElem[i].ID;

		productoItem.querySelector('H4 A').innerText = "" + productosElem[i].NOMBRE
		productoItem.querySelector('IMG').src = "images/productos/"+productosElem[i].ID+".jpg"
		productoItem.querySelector('P').innerText = "" + productosElem[i].DESCRIPCION
		productoItem.querySelector('SPAN').innerText = "$" + productosElem[i].PRECIO

		//Hacer que todos los hipervínculos de cada producto tengan un "hashtag" con el ID propio (ej: href="producto.html#P001").
		productoItem.querySelectorAll('a')[0].href = "producto.html?id="+productosElem[i].ID
		productoItem.querySelectorAll('a')[1].href = "producto.html?id="+productosElem[i].ID

		nodo_productos.appendChild( productoItem )

	}

}

//Definir un mecanismo de funciones para que al clickear los links "Más Recientes", "Menor Precio" y "Mayor Precio" se altere el orden de los productos.

var linkOrden = document.querySelectorAll('w_nav a')
for(var link in linkOrden){
	link.onclick = ordenarProductos;
}

function ordenarProductos(argument) {
	
	argument.preventDefault()

	var tipo = argument.target.parentElement.className //me trigo el nombre de la clase 

	if (tipo == "Mrecientes") 
	{
		productosElem.sort(Mrec)
	}

	if (tipo == "Menprecio") 
	{
		productosElem.sort(Menp)
	}

	if (tipo == "Mayprecio") 
	{
		productosElem.sort(Mayp)
	}

	construirSitio(productosElem)
}

function Mrec(a,b) {
	if (a.id < b.id) {
		return 1
	}
	if (a.id > b.id) {
		return -1
	}
	return 0
}

function Menprecio(argument) {
	if (a.precio < b.precio) {
		return 1
	}
	if (a.precio > b.precio) {
		return -1
	}
	return 0
}

function Mayp(argument) {
	if (a.precio > b.precio) {
		return 1
	}
	if (a.precio < b.precio) {
		return -1
	}
	return 0
}