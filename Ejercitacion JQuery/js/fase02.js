$().ready(function(){

	var flagName = false;
	var flagMail = false;
	var flagMens = false;

		$( ":text" ).eq(0).blur(function(){
			flagName = validarName($(this));
			validarClase(flagName,$(this))
		})

		$( ":text" ).eq(1).blur(function(){
			flagMail = isValidEmailAddress($(this).val());
			validarClase(flagMail,$(this))
		})

		$("textarea").blur(function() {
			flagMens = validarMens($(this));
			validarClase(flagMens,$(this));	
		})

	$('form').submit(function(argument) {

		argument.preventDefault();

		var nodoForm = argument.target;

		var flagForm = flagMens && flagMail && flagName;
		
		if(validarForm(flagForm)){
		 	nodoForm.submit()
		}
	})
})

function validarForm(flagForm) {
	if (!flagForm) {

		enviarAlerta(flagForm);
		
		return false;
		
	}else{
			return true;
		}
}

function enviarAlerta() {
		alert('Error! XXXXXX incompleto o invalido')
}

function validarName(nameObj) {
	return (nameObj.val().length > 4 && isNaN(nameObj.val().slice(0,1))) ? true : false;
}

function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}

function validarMens(mensObj) {
	var longitudText = mensObj.val().length;

	return (longitudText != 0 && longitudText < 200) ? true : false;
}

function validarClase(flag,obj) {
	if (flag) {
		obj.addClass('ok')
	}else{
		if(obj.hasClass('ok')){
			obj.removeClass('ok')
		}
		obj.addClass('error')
	}
}