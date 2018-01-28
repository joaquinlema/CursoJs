window.onload = function(){

	var contenedor3 = document.querySelector("#contenedor3")
	var nodo_a = document.createElement("a")

	agregarLink();

	function agregarLink(){
	
	nodo_a.href = "https://google.com"
	nodo_a.textContent = "link google"
	contenedor3.appendChild(nodo_a)

	}

}