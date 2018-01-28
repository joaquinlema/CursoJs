window.addEventListener('load',activado)

function activado() {
	
	var formulario = document.querySelector('.contact-form form')
	var nodo_nombre = formulario.querySelector('input[name = nombre]')
	var nodo_email = formulario.querySelector('input[name = email]')
	var nodo_mens = formulario.querySelector('textarea[name = mensaje]')

	nodo_nombre.addEventListener('blur',validarNombre)
	formulario.addEventListener('submit',validar)

}

function validar(e) {
	
	e.preventDefault()

}

function validarNombre(argument) {

	var nombreValor = argument.target

	if(nombreValor.value.length > 4 && isNaN(nombreValor.value.charAt(0)) ){
		console.log(validarClase(nombreValor))
		nombreValor.classList.add("ok")

	}else {
		
		nombreValor.classList.add("error")	
	}
}

function validarMail(argument) {
	// body...
}

function validarMens(argument) {
	// body...
}

function validarClase(elemento){
	return elemento.classList.contains("ok")
}