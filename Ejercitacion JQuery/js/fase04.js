$().ready(function(){   
    $.ajax({
		"type": "GET",   /*"method": "GET",*/
		"url": "ajax/productosJquery.json",
		"dataType": "json",
    }).done(construirSitio)
    .fail(notificarError)
    .always(function(){
        console.log("Peticion Ajax completada con exito")
    });
})

function construirSitio() {

    var nodo_producto_clon = document.querySelector('.producto').cloneNode(true);
    var nodo_productosLista = $('#listadoProductos');

    nodo_productosLista.html('');

    //para cada elemento del JSON
    for(var i = 0; i < data.length;i++){

        var nodo_item = nodo_producto_clon.cloneNode(true);
        var info = data[i];
        //seteo de valores para cada componente del nodo producto
        nodo_item.id = info.ID;
        nodo_item.querySelector('H4 A').innerText = "" + info.NOMBRE;
        nodo_item.querySelector('img').src = 'images/productos/P00'+info.ID+".jpg";
        nodo_item.querySelector('p').innerText = "" + info.DESCRIPCION;
        nodo_item.querySelector('span').innerText = "" + info.PRECIO + "$";

        nodo_item.querySelectorAll('a')[0].href = "producto.html?id="+info.ID;
        nodo_item.querySelectorAll('a')[1].href = "producto.html?id="+info.ID;

        nodo_productosLista.append(nodo_item);    
        
        funcionamientoLinks(data);
    }
}

function funcionamientoLinks(data){

    var dataOrdenada = [];
    dataOrdenada.push(data);

    $('#comboOrden').change(function () {
        
        var valorSelec = $( "select option:selected" ).val();
        
        if (valorSelec == "masReciente") {
            dataOrdenada.sort(mRec);
        }
        if (valorSelec == "menosPrecio") {
            dataOrdenada.sort(menPre);
        }
        if (valorSelec == "mayorPrecio") {
            dataOrdenada.sort(mayPre);
        }

        //construirSitio(dataOrdenada)
      })
}

function mRec(a,b) {
    if(a.ID < b.ID){
        return 1
    }
    if(a.ID > B.ID){
        return -1;   
    }
    return 0;
}

function menPre(a,b) {
    if(a.PRECIO < b.PRECIO){
        return 1
    }
    if(a.PRECIO > B.PRECIO){
        return -1;   
    }
    return 0;
}

function mayPre(a,b) {
    if(a.PRECIO < b.PRECIO){
        return 1
    }
    if(a.PRECIO > B.PRECIO){
        return -1;   
    }
    return 0;
}

function notificarError(error) {
    mostrarError($('#page'))
}