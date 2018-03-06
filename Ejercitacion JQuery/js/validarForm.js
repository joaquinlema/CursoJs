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
            EnviarDatos(nombre.val(),apellido.val())
       }

    })
})

function EnviarDatos(nombre,apellido){
    $.ajax({
        "type": "GET",   
        "url": "ajax/nombreArchivo2.json",
        "data": {"nombre":nombre,"apellido":apellido},
        "dataType": "json"
    }).done(gestionarRespuesta)
    .fail(mostrarError)
}

function mostrarError(params) {
    var imagenError = '<img src="images/productos/error.gif" alt="cargando..." height="420" width="420">'
    $('#page').html("");   
    $('#page').html(imagenError);  
}

function gestionarRespuesta(data) {
    $('#page').html("");
    var imagenaprobado = '<img src="images/productos/aprobado.jpg" alt="aprobado" height="420" width="420">'
    
    if (data.valor) {
        $('#page').html(imagenaprobado);
        
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