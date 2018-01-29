/*window.onload = function() {
    var ajax;
    iniciar()
}
*/
window.addEventListener('load',iniciar)

function iniciar() {
    
    var menu = document.querySelectorAll("#menu li")
   
    menu.forEach(function(element) {
        element.addEventListener('click',peticionAjax)
    }, this);
}

function peticionAjax(params) {

    params.preventDefault()

    var metodo = "GET"
    var archivo = params.target.href//especifico el archivo que  quiero

    var ajax = new XMLHttpRequest(); //creo un objeto para realizar peticiones ajax
    ajax.open(metodo,archivo) // especifico el tipo de petitorio y el archivo al cual le voy a pedir al servidor
    ajax.addEventListener("load",procesarRespuesta)//especifico que hacer cuando me responde el servidor 
    ajax.send()//envio la consulta
}

function procesarRespuesta(elementoAjax) {

    var caja = document.querySelector('#page')
    caja.innerHTML = "cargando";

    if (elementoAjax.target.status == 200 && elementoAjax.target.readyState == 4) {
        caja.innerHTML = "";
        caja.innerHTML = elementoAjax.target.responseText;

    }else{
        var nodoSpan = document.createElement("span")
        nodoSpan.classList.add("error")
        nodoSpan.innerHTML = "Contenido no disponible :("
        caja.appendChild(nodoSpan)
    }
}