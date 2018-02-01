$(function(){

			$.ajax({
				"type": "GET",   /*"method": "GET",*/
				"url": "json/catalogo_peliculas.json",
				"data": {
					     "id":5, 
				         "nombre":"juan"
				        },
				"dataType": "json",
				"success": construirSitio,
				"error": function(error_ocurrido){
					console.log(error_ocurrido);
				},
				"complete": function(){
					console.log("termino!");
				}
			});

function construirSitio(data){
	console.log(data);

	var nodo_ul = document.createElement("ul");
	document.body.appendChild(nodo_ul);

	$.each(data.peliculas, function(i, obj){

		var $nodo_li = $('<li class="peli"></li>');
		/*$nodo_li.html('<h2>'+obj.title+'</h2>'+
					  '<img src="'+obj.poster+'" width="100"/>'+
					  '<p>'+obj.synopsis+'</p>'
			         );*/
		$nodo_li.html(`<h2>${obj.title}</h2>
					  <img src="${obj.poster}" width="100"/>
					  <p>${obj.synopsis}</p>
					  <button id="${obj.id}">vER tRAILER</button>`
			         );	         
		$(nodo_ul).append($nodo_li);
		$("#"+obj.id).on('click',verTrailer)
	});	
}

function verTrailer(e){
	var idpel = e.target.id
	window.location.href="mipeli.html#"+idpel;
}

});
		