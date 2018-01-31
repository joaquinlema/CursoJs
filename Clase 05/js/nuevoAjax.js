$(function() {
	$.ajax({
		"method":"GET",//especificamos el tipo de metodo GET O POST, podemos usar "type" : "get" que es lo mismo
		"url":"json/catalogo_peliculas.json",//URL DEL ARCHIVO QUE PIDO
		"data": {//data para ser enviada al servidor
			"id" : 5,
			"nombre" : "juan"
			},
		"dataType":"json",//le puedo decir el tipo de archivo que voy a recibir y ajax o jquery lo parsea directamente
		"success": construirSitio,
		"error" : exploto,
		"complete" : function (termino) {//funcion que se ejecuta cuando se completa el ajax ademas del success y error
							console.log("termino");}
	})//el open esta defino por "method"; agregar el evento ocurre en el success y en error; el send ocurre como toda la instruccion
})

function construirSitio(data) {

	var nodoUl = document.createElement("ul")
	document.body.appendChild(nodoUl)

	$.each(data.peliculas,function(i,elem){
		var nodoLi = $("<li class='clase2'></li>")//crea un objeto jquery con el nodo creado adentro
		nodoLi.html("<h2>"+ elem.title +"</h2>"
					+"<h4>"+ elem.director +"</h4>"	
					+"<p>"+ elem.synopsis +"</p>"
					+"<img src="+elem.poster+ " width=100px></img>")
		$(nodoUl).append(nodoLi)

	})

	
}

function exploto(argument) {
	
	console.log(argument)

}