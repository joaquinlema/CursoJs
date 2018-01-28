window.onload = function(){

	var ajax;
	var boton = document.querySelector("#boton")
	boton.addEventListener('click',realizarPeticion)
		

	function procesarRespuesta() {
		var caja = document.querySelector('#contenedor')
		caja.innerHTML = ajax.responseText;
	}

	function realizarPeticion() {
	//objeto ajax 
		var metodo = "GET"
		var archivo = "ajax/frase.txt"//especifico el archivo que  quiero

		ajax = new XMLHttpRequest(); //creo un objeto para realizar peticiones ajax
		ajax.open(metodo,archivo) // especifico el tipo de petitorio y el archivo al cual le voy a pedir al servidor
		ajax.addEventListener("load",procesarRespuesta)//especifico que hacer cuando me responde el servidor 
		ajax.send()//envio la consulta

	}

}