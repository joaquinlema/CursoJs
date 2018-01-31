$(function() {
	$.ajax({
		"method":"GET",//especificamos el tipo de metodo GET O POST, podemos usar "type" : "get" que es lo mismo
		"url":"json/catalogo_peliculas.json",//URL DEL ARCHIVO QUE PIDO
		"data": {//data para ser enviada al servidor
			"id" : 5,
			"nombre" : "juan"
			},
		"dataType":"json",//le puedo decir el tipo de archivo que voy a recibir y ajax o jquery lo parsea directamente
		"success": function (respuesta) {//especifico la funcion a ejecutar cuando esta todo ok,el response viene como parametro con el nombre que yo quiero
							console.log(respuesta);	},
		"error" : function (errorOcurrido) {
							console.log(errorOcurrido);},
		"complete" : function (termino) {//funcion que se ejecuta cuando se completa el ajax ademas del success y error
							console.log("termino");}
	})//el open esta defino por "method"; agregar el evento ocurre en el success y en error; el send ocurre como toda la instruccion
})
