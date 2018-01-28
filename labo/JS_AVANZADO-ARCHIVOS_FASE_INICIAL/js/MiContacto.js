window.addEventListener('load',activado)

function activado() {
	
	var formulario = document.querySelector('.contact-form form')
	var nodo_nombre = formulario.querySelector('input[name = nombre]')
	var nodo_email = formulario.querySelector('input[name = email]')
	var nodo_mens = formulario.querySelector('textarea[name = mensaje]')

	nodo_nombre.addEventListener('blur',validarNombre)
	nodo_email.addEventListener('blur',validarEmail)
	formulario.addEventListener('submit',validar)

}

function validar(e) {
	
	e.preventDefault()

}

function validarNombre(argument) {

	var nombreValor = argument.target

	if(tamañoElem(nombreValor) > 4 && isNaN(nombreValor.value.charAt(0)) ){
		
		agregarClase(nombreValor,"ok")

	}else {

		if(contieneClase(nombreValor,"ok")){
		
			quitarClase(nombreValor,"ok")
		
		}

		agregarClase(nombreValor,"error")

	}
}

function validarMens(argument) {
	// body...
}

function validarEmail(argument) {

	var emailValor = argument.target

	if (esMail(emailValor.value)) {
		
		agregarClase(emailValor,"ok")
		
	}else {
		
		if(contieneClase(emailValor,"ok")){
				
			quitarClase(emailValor,"ok")
				
		}
		
		agregarClase(emailValor,"error")
		
	}
}

function esMail(params) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;	
	return String(params).search (filter) != -1;
}

function agregarClase(elemento,nombreClase) {
	return elemento.classList.add(nombreClase)
}

function quitarClase(elemento,nombreClase) {
	return elemento.classList.remove(nombreClase)
}

function tamañoElem(params) {
	return params.value.length
}

function contieneClase(elemento,nombreClase){
	return elemento.classList.contains(nombreClase)
}