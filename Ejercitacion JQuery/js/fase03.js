<<<<<<< HEAD
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
  
=======
$().ready(function(){
    var menu = $('#menu li').on('click', realizarPedido)
})

function realizarPedido(e) {
    
    e.preventDefault();

    var nombreArchivo = e.target.pathname;
    var mensaje = '<img src="images/productos/cargando.gif" alt="cargando..." height="420" width="420">' ;
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
  
>>>>>>> 69749e746dde24679e56687224612f6b284220a3
}