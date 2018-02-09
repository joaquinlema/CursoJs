///////////////////////////////////////////////////////////////
///// *** Proyecto Integrador - Fase 02 - Soluciones *** /////
/////////////////////////////////////////////////////////////

/*
1)	Al salir del campo nombre verificar si el valor es
	mayor a 4 caracteres y si el primer caracter no es un numero...

	Si es así asignarle la clase "ok"...

	Si no es así asignarle la clase "error".
*/
var nombre = document.querySelector("input[name=nombre]");
nombre.onblur = validarNombre;

function validarNombre(){
	nombre.classList.remove("ok", "error");

	if ( nombre.value.length > 4 && isNaN( nombre.value.substring(0,1) ) ) {
		nombre.classList.add("ok");
		return true;
	} else {
		nombre.classList.add('error');
		return false;
	}
}
/*
	2)	Al salir del campo email verificar si el valor tiene
		sintaxis de e-mail (es decir, un caracter "@" y un caracter ".")...

		Si es así asignarle la clase "ok"...

		Si no es así asignarle la clase "error".
*/
var email = document.querySelector("input[name=email]");
email.onblur = validarEmail;

function validarEmail(){
	email.classList.remove("ok", "error");

	if ( email.value.indexOf("@") != -1 &&  email.value.indexOf(".") != -1 ) {
		email.classList.add("ok");
		return true;
	} else {
		email.classList.add('error');
		return false;
	}
}
/*
	3)	Al salir del area mensaje verificar
		si el mismo no esta vacion y si es menor a 200 caracteres...

		Si es así asignarle la clase "ok"...

		Si no es así asignarle la clase "error".
*/
var mensaje = document.querySelector("textarea[name=mensaje]");
mensaje.onblur = validarMensaje;

function validarMensaje() {
	mensaje.classList.remove("ok", "error");

	if ( mensaje.value != "" && mensaje.value.length < 200 ) {
		mensaje.classList.add("ok");
		return true;
	} else {
		mensaje.classList.add('error');
		return false;
	}
}
/*
	4)	Al ejecutar el formulario...
		- Evitar que se envien los datos directamente
		- Validar en cascada los campos (re)utilizando las funciones pertinentes
		- Disparar un alert() que muestre: Error! XXXXXX incompleto o invalido segun cada caso
		- Si todos los campos son validos, entonces ejecutar el formulario
	(NOTA: actualizar las funciones de validacion para que retornen "true" o "false" si es que resulta valido o no el valor ingresado 
*/
var formulario = document.querySelector("form");
formulario.onsubmit = validarFormulario;

/*
//////// Anulada para hacer uso de la definida en el index.html ////////
function validarFormulario(e){
	console.log(e);
	e.preventDefault();

	if( !validarNombre() ){
		alert("Error! Nombre incompleto o invalido");
	} else if( !validarEmail() ){
		alert("Error! E-Mail incompleto o invalido");
		console.log("mal email")
	} else if( !validarMensaje() ) {
		alert("Error! Mensaje incompleto o invalido");
	} else {
		alert("Perfecto!! Ahora se enviaran los datos del formulario :)");
		e.target.submit();
	}
}
*/