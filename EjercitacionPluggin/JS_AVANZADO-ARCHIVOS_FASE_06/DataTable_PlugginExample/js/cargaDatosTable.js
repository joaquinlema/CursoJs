$(function() {
     $.ajax({
         "url" : "json/data.json",

     })
     .done(cargarTablero)
     .fail(notificarError)
     .always(function() {
         console.log("ajax ok")
     })
})

function cargarTablero(data) {
    //COPIO LA ESTRUCTURA DEL ELEMENTO PARA CARGAR LOS DATOS
    var replicarElemento = document.querySelector('#elementoCopiar').cloneNode(true);

    var cuerpoTablero = document.querySelector('tbody');
    //LIMPIO EL TBODY
    cuerpoTablero.innerHTML = "";

    for(var t = 0 ; t < data.length; t++){
        
        var nuevoElemento = replicarElemento.cloneNode(true);

        var columna = nuevoElemento.querySelectorAll('td');

        columna[0].innerHTML = data[t].Name;
        columna[1].innerHTML = data[t].Position;
        columna[2].innerHTML = data[t].Office;
        columna[3].innerHTML = data[t].Age;
        columna[4].innerHTML = data[t].Startdate;
        columna[5].innerHTML = data[t].Salary;
        
        cuerpoTablero.appendChild(nuevoElemento);
    }

    $('#myTable').DataTable();
}

function notificarError(params) {
    console.log("Error: "+ params)
}