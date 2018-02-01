$().ready(function() {
	
	var codigo = location.hash;//localiza los elementos alm,acenados en la url
	
	//codigo = codigo.replace("#","") //forma numero 1 de reemplazar valores
	codigo = codigo.substr(1) // forma numero dos le indico donde empiezo a tomar valores, opcion substring(inicio,final)
	
	console.log(codigo)

	if(!codigo){
		location.href = "ajax_jqueryIndex.html"
	}

	$.ajax({
				"type": "POST",   /*"method": "GET",*/
				"url": "json/catalogo_peliculas.json",
				"data": {
					     "id_pelicula": codigo
				        },
				"dataType": "json",
				"success": completarPagina,
				"error": function(error_ocurrido){
					console.log(error_ocurrido);
				},
				"complete": function(){
					console.log("termino!");
				}
			});

	function completarPagina(jsonData){
		
		var pelicula;
		var cant = jsonData.peliculas.length;
		//buscar la pelicula
		/*$.each(jsonData.peliculas,function(i,peli){
			if (peli.id == codigo) {
				pelicula = peli;
				return;//no es lo mejor preferible usar while para estos casos
			}
		})*/

		for (var i = 0; i < cant; i++) {

			var peli = jsonData.peliculas[i]
			
			if (peli.id == codigo) {
				pelicula = peli;
				break;//no es lo mejor preferible usar while para estos casos
			}
		}
		//console.log(pelicula)
	
	$('h1').html(pelicula.title)
	$('p').html(pelicula.synopsis)
	$('iframe').attr("src",pelicula.trailer)
	}

})
