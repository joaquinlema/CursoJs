$(function() {
    $.ajax({
		"type": "GET",   /*"method": "GET",*/
		"url": "ajax/productosJquery.json",
		"dataType": "json"
    })
    .done(buscarId)
    .fail(function(params) {
        console.log(params)
    });
})

function buscarId(data) {
    
    var id = getParameterByName('id');
    var elemId;
    
    for(var j = 0; j < data.length; j++){
        if(data[j].ID == id){
            elemId = data[j];
        }
    }

    var contenedorProd = $('.single_grid')

	//var productoItem = document.querySelector('.desc1 .span_3_of_2').cloneNode(true)
	var productoItem = document.querySelector('#acaesta').cloneNode(true);
	
//	var productoItemImage = document.querySelector('.grid .images_3_of_2').cloneNode(true)
	var productoItemImage = document.querySelector('#imagenConten').cloneNode(true);

	productoItemImage.querySelector('#etalage li img').src = "images/productos/P00"+elemId.ID+".jpg"
	productoItemImage.querySelector('#etalage li img').classList.add('tamañoProd')	

	productoItem.querySelector('h4').innerHTML = elemId.NOMBRE;
	productoItem.querySelector('.left-n').innerHTML = "$" + elemId.PRECIO
	productoItem.querySelector('h6').innerHTML = "Stock: "+ elemId.STOCK 
	productoItem.querySelector('p').innerHTML = elemId.DESCRIPCION


	contenedorProd.html('').append(productoItemImage).append(productoItem)
}