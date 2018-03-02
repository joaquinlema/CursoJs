$().ready(function(){
    var menu = $('#menu li').on('click', realizarPedido)
})

function realizarPedido(e) {
    
    e.preventDefault();

    var nombreArchivo = e.target.pathname;

    $.ajax({
        "type": "GET",   /*"method": "GET",*/
        "url": nombreArchivo,
        "success": irASitio,
        "error": mostrarError,
        "complete": function(){
            console.log("termino!");
        }
    });
}

function mostrarError(){

    var mensajeError = "<span>Error</span>";
    $('#page').html("");   
    $('#page').html(mensajeError);  

}

function irASitio(data) {

    var mensaje = "cargando";
    $('#page').html(mensaje);
   
    $('#page').html("");   
    $('#page').html(data);
  
}