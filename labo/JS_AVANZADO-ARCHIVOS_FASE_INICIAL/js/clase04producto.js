$(function() {

	$.ajax({
		"type": "GET",   /*"method": "GET",*/
		"url": "json/ajax/productos/productosJson.json",
		"dataType": "json",
		"success": buscarId,
		"error": function(error_ocurrido){
			console.log(error_ocurrido);
		},
		"complete": function(){
			console.log("termino!");
		}
	});

})

function buscarId(productosElem) {

	var prodId = getParameterByName('id');
	var elemId;
	var i;

	for (i = 0; i < productosElem.length; i++) {
		if (productosElem[i].ID == prodId) {
			elemId = productosElem[i];
		}
		
	}

	var contenedorProd = document.querySelector('.single_grid')

	//var productoItem = document.querySelector('.desc1 .span_3_of_2').cloneNode(true)
	var productoItem = document.querySelector('#acaesta').cloneNode(true);
	
//	var productoItemImage = document.querySelector('.grid .images_3_of_2').cloneNode(true)
	var productoItemImage = document.querySelector('#imagenConten').cloneNode(true);

	contenedorProd.innerHTML = "";

	productoItemImage.querySelector('#etalage li img').src = "images/productos/"+elemId.ID+".jpg"
	productoItemImage.querySelector('#etalage li img').classList.add('tamañoProd')	

	productoItem.querySelector('h4').innerHTML = elemId.NOMBRE;
	productoItem.querySelector('.left-n').innerHTML = "$" + elemId.PRECIO
	productoItem.querySelector('h6').innerHTML = "Stock: "+ elemId.STOCK + " unidades"
	productoItem.querySelector('p').innerHTML = elemId.DESCRIPCION


	contenedorProd.appendChild(productoItemImage)	
	contenedorProd.appendChild(productoItem)
	
}

function getParameterByName(name) {
    if (name !== "" && name !== null && name != undefined) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    } else {
        var arr = location.href.split("/");
        return arr[arr.length - 1];
    }

}