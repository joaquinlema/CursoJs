window.addEventListener('load',function() {

	var formulario = document.querySelector("#frm1");

	formulario.addEventListener('submit',validar);

	function validar(e){

		e.preventDefault();//detiene el flujo del evento

		var nodo_frm = e.target;
		
		var nodo_email = nodo_frm.querySelector("input[name = email]");
		
		var nodo_comentario = nodo_frm.querySelector("input[name = comentario]");

		var validado = true;


		if (nodo_email.value.trim() == ""){
			validado = false;
			console.log(false);
		}

		if (nodo_comentario.value.trim() == ""){
			validado = false;
			console.log(false);
		}

		if (validado) {
			nodo_frm.submit();
			console.log(true);
		}
	}

});


//---------------------------------------------------------


