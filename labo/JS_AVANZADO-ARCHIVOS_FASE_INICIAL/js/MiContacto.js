window.addEventListener('load',activado)

function activado() {
	
	var formulario = document.querySelector('.contact-form form')
	var nodo_nombre = formulario.querySelector('input[name = nombre]')
	var nodo_email = formulario.querySelector('input[name = email]')
	var nodo_mens = formulario.querySelector('textarea[name = mensaje]')

	nodo_nombre.addEventListener('blur',validarNombre)
	nodo_email.addEventListener('blur',validarEmail)
	nodo_mens.addEventListener('blur',validarMens)
	formulario.addEventListener('submit',validar)

}

function validar(e) {
	
	e.preventDefault()

	var formNodo = e.target
	var nodo_nombre = formNodo.querySelector('input[name = nombre]')
	var nodo_email = formNodo.querySelector('input[name = email]')
	var nodo_mens = formNodo.querySelector('textarea[name = mensaje]')

	if (contieneClase(nodo_nombre,"ok") && contieneClase(nodo_email,"ok") && contieneClase(nodo_mens,"ok")) {
		formNodo.submit()
	}else{
		alert("No puede haber contenedores en rojo o vacios")
	}


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
	
	var mensValor = argument.target
	
		if (tamañoElem(mensValor) < 200 && !isEmpty(mensValor)) {
			
			agregarClase(mensValor,"ok")
			
		}else {
			
			if(contieneClase(mensValor,"ok")){
					
				quitarClase(mensValor,"ok")
				
			}
			
			agregarClase(mensValor,"error")
			
		}
	
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

function isEmpty(params) {
	return tamañoElem(params) <= 0;
}