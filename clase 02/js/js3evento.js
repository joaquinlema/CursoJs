window.onload = function () {

var cuerpo = document.querySelector("body");
var btnluz = document.querySelector("#btn");

//btnluz.addEventListener('click',apagarLuz);
//btnluz.addEventListener('click',cambiarTexto);

btnluz.addEventListener('click',function() {
	if (document.body.style.backgroundColor === "black") {
		encenderLuz();
	} 
		else {
			apagarLuz();
		}
});


//creamos un evento asociado al click, en realidad es como qeu lo genera automaticamente siguien lo agregado con addEventListener
//var eventoClick = new Event('click');

//btnluz.dispatchEvent(eventoClick);


function apagarLuz(argument) {
	cuerpo.style.backgroundColor = "black";
}

function encenderLuz(argument) {
	cuerpo.style.backgroundColor = "white";	
}

function cambiarTexto(argument) {
	var nodoTitulo = document.querySelector("h1");
	nodoTitulo.innerHTML = "Cambiamos el texto";
}

}