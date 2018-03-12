$(function() {
     $.ajax({
         "url" : "json/data.json",

     })
     .done(cargarTablero)
     .fail(notificarError)
     .always(function() {
         console.log("ajax ok")
     })

     $('#myTable').DataTable();
})

function cargarTablero(data) {
    //COPIO LA ESTRUCTURA DEL ELEMENTO PARA CARGAR LOS DATOS
    var replicarElemento = document.getElementById('elementoCopiar').cloneNode();

    var cuerpoTablero = document.getElementsByTagName('tbody');
    //LIMPIO EL TBODY
    cuerpoTablero.innerHTML = "";

    for(var t = 0 ; t < data.length; t++){
        
        var nuevoElemento = replicarElemento;
        
        nuevoElemento.querySelectorAll(td);
        nuevoElemento[0].text = data.Name;
        nuevoElemento[1].text = data.Position;
        nuevoElemento[2].text = data.Office;
        nuevoElemento[3].text = data.Age;
        nuevoElemento[4].text = data.Startdate;
        nuevoElemento[5].text = data.Salary;
        
        cuerpoTablero.appendChild(nuevoElemento);
    }
}