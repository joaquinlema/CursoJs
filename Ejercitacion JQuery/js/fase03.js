$().ready(function(){
    var menu = $('#menu li').on('click', realizarPedido)
})

function realizarPedido(e) {
    
    e.preventDefault();

    var nombreArchivo = e.target.pathname;
    var mensaje = "cargando";
    $('#page').html(mensaje);
    
    $.ajax({
        "type": "GET",   /*"method": "GET",*/
        "url": nombreArchivo,
        "success": irASitio,
        "error": mostrarError,
        "complete": function(){
            console.log("termino!");
        }
    }).always(function (jqXHR) {
        console.log("always");
    });
}

function mostrarError(){

    var mensajeError = "<span>Error</span>";
    $('#page').html("");   
    $('#page').html(mensajeError);  

}

function irASitio(data) {
   
    $('#page').html("");   
    $('#page').html(data);
  
}