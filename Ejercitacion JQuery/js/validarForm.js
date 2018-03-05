$().ready(function() {

    var flagNombre = false;
    var flagApellido = false;
    var flagEmail = false;
    var flagContraseña = false;
    var nombre = $('input[name = "nombre"]');
    var apellido = $('input[name = "apellido"]');

    nombre.blur(function() {
        flagNombre = validarNombre($(this));
        validarClase(flagNombre,$(this));
    });

    apellido.blur(function() {
        flagApellido = validarApellido($(this))
        validarClase(flagApellido,$(this))
    });

    $('input[name = "email"]').blur(function() {
        flagEmail = validarEmail($(this))
        validarClase(flagEmail,$(this))
    });

    $('input[name = "pass"]').blur(function() {
        flagContraseña = validarContraseña($(this))
        validarClase(flagContraseña,$(this))
    });
    
    $('form').submit(function(args){
        
        args.preventDefault();

        var flagInterno =  flagNombre + flagEmail + flagContraseña + flagApellido; 
        
        if(validarFormulario(flagInterno)){
            EnviarDatos(nombre,apellido)
       }

    })
})

function EnviarDatos(nombre,apellido){
    $.ajax({
        "type": "POST",   
        "url": ajax/nombreArchivo2.txt,
        "data": {"nombre":nombre,"apellido":apellido},
        "dataType" : "json",
        "success": respuestaOk,
        "error": mostrarError,
        "complete": function(){
            console.log("termino!");
        }
    })
}

function respuestaOk(data) {
    $('#page').html("");

    if (data.valor) {
        $('#page').html("Gracias por su consulta, responderemos a la brevedad :)");
        
    } else {
        $('#page').html("Ocurrió un error, escribanos a info@educacionit.com :(");
        
    }
}

function validarFormulario(flagForm) {
	return validarForm(flagForm)
}

function validarNombre(params) {
    return validarName(params)
}

function validarApellido(params) {
    return validarApe(params)
}

function validarEmail(params) {
    return isValidEmailAddress(params)
}

function validarContraseña(params) {
    var regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    return regexPattern.test(params.val());
}