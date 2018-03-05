$().ready(function(){

	var flagName = false;
	var flagMail = false;
	var flagMens = false;

		$( ":text" ).eq(0).blur(function(){
			flagName = validarName($(this));
			validarClase(flagName,$(this))
		})

		$( ":text" ).eq(1).blur(function(){
			flagMail = isValidEmailAddress($(this));
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