window.onload = function(){

var btn1 = document.querySelector("#btn1");
var divDetalle = document.querySelector("#detalle");
var btn2 = document.querySelector("#btn2");
var divDetalle2 = document.querySelector("#detalle2");
var btn3 = document.querySelector("#btn3");
var resul2 = resta(9,2)

btn1.onclick = function(){
	divDetalle.classList.toggle("show");
	if (divDetalle.classList.contains("show")) {
		alert("tiene oculto");
	}
}

btn2.onclick = myFunction2;

function myFunction2() {
    var x = divDetalle2;
        if (x.style.display === "block") {
        x.style.display = "none";
        btn2.innerHTML = "Mostrar";
        
    } else {
        x.style.display = "block";
        btn2.innerHTML = "Ocultar";
    }
}

//---------------------------------------------------------
//Forma Expresada: a la variable le asigno una funcion anonima (no tiene nombre)
var suma = function (a,b) {
	return a+b;
}

var resultado = suma(10,1);

alert("funcion anonima: " + resultado);

//---------------------------------------------------------
//forma declarativa: defino la funcion con nombre y apellido
function resta(a,b){
	return a-b;
}

alert("Funcion declarativa: " + resul2);


//---------------------------------------------------------

//argument es el objeto que nos devuelve js al momento de ejecutar la funcion informando distintos datos con respecto al evento
btn3.onclick = function(argument) {
	btn3.style.backgroundColor = "red";
	console.log(argument);

	var testbtn = argument.target;
	//testbtn.innerHTML = "HOLA"; // con este funciona !!!
	testbtn.textContent = "HOLA"; //este es como la standar
}

//---------------------------------------------------------

}
