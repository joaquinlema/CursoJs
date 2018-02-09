var dataProductos = [];

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

dataProductos = productosElem;
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
		productoItem.querySelector('IMG').classList.add('tamañoImg')

		productoItem.querySelector('P').innerText = "" + productosElem[i].DESCRIPCION
		
		productoItem.querySelector('SPAN').innerText = "$" + productosElem[i].PRECIO

		//Hacer que todos los hipervínculos de cada producto tengan un "hashtag" con el ID propio (ej: href="producto.html#P001").
		productoItem.querySelectorAll('a')[0].href = "producto.html?id="+productosElem[i].ID
		productoItem.querySelectorAll('a')[1].href = "producto.html?id="+productosElem[i].ID

		nodo_productos.appendChild( productoItem )

	}

var linkOrden = document.getElementById('listadoDeOrden').getElementsByTagName("a")

funcionamientoLinks(linkOrden);

}

//Definir un mecanismo de funciones para que al clickear los links "Más Recientes", "Menor Precio" y "Mayor Precio" se altere el orden de los productos.
function funcionamientoLinks(linkOrden) {

	for(var l = 0; l < linkOrden.length; l++){
		linkOrden[l].onclick = ordenarProductos
	}

}

function ordenarProductos(argument) {
	
	argument.preventDefault()

	var tipo = argument.target.parentElement.className //me trigo el nombre de la clase 

	if (tipo == "Mrecientes") 
	{
		dataProductos.sort(Mrec)
	}

	if (tipo == "Menprecio") 
	{
		dataProductos.sort(Menprecio)
	}

	if (tipo == "Mayprecio") 
	{
		dataProductos.sort(Mayprecio)
	}

	construirSitio(dataProductos)
}

function Mrec(a,b) {
	if (a.ID < b.ID) {
		return 1
	}
	if (a.ID > b.ID) {
		return -1
	}
	return 0
}

function Mayprecio(a,b) {
	if (a.PRECIO < b.PRECIO) {
		return 1
	}
	if (a.PRECIO > b.PRECIO) {
		return -1
	}
	return 0
}

function Menprecio(a,b) {
	if (a.PRECIO > b.PRECIO) {
		return 1
	}
	if (a.PRECIO < b.PRECIO) {
		return -1
	}
	return 0
}