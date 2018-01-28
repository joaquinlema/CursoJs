window.onload = function(){

	var contenedor = document.querySelector("#contenedor2")
	var ajax;
	var nodo_h1 = document.createElement("h1")
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

		agregarContenido();
		
		ajax = new XMLHttpRequest(); //creo un objeto para realizar peticiones ajax
		ajax.open(metodo,archivo) // especifico el tipo de petitorio y el archivo al cual le voy a pedir al servidor
		ajax.addEventListener("load",procesarRespuesta)//especifico que hacer cuando me responde el servidor 
		ajax.send()//envio la consulta

	}

	function agregarContenido(){

	//forma de agregar contenido html a una estructura ya hecha
	nodo_h1.innerHTML = "Nodos al vuelo"
	contenedor.appendChild(nodo_h1);
	}

}