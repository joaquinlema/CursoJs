$().ready(function(){
    var menu = $('#menu li').on('click', realizarPedido)
})

function realizarPedido(e) {
    
    e.preventDefault();

    var nombreArchivo = e.target.pathname;
    var mensaje = '<img src="images/productos/cargando.gif" alt="cargando..." height="420" width="420">' ;
    $('#page').html(mensaje);
    
    /*
     $.ajax({
        "type": "GET",   
        "url": nombreArchivo,
        "success": ModificarPage,
        "error": mostrarError,
        "complete": function(){
            console.log("termino!");
        }
    });
    */    
    $.ajax({
        "url" : nombreArchivo
    })
    .done(ModificarPage)
    .fail(mostrarError)
    .always(function(){console.log("complete papa")})
}

function mostrarError(){

    var imagenError = '<img src="images/productos/error.gif" alt="cargando..." height="420" width="420">'
    $('#page').html("");   
    $('#page').html(imagenError);  

}

function ModificarPage(data) {

    $('#page').html("");   
    $('#page').html(data);
  
}