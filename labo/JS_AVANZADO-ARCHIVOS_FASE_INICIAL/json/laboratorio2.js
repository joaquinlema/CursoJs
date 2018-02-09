var articulo; //seleccionar el article del DOM

function cargarProducto(){
  //armo el XHR
  //me suscribo al error
  //me suscribo al done
  //abro la conexion
  //envío el pedido
  
  function ajaxError(){
    console.error('Error de comunicación');
  }
  
  function ajaxResponse(){
    if(pedido.status != 200){
      ajaxError();
      return;
    }
    var objeto;
    dibujarProducto(articulo, objeto); //nos conviene que llenarElemento sea un parámetro para desacoplar cargarProducto de dibujarProducto
  }
  
}

function dibujarProducto(elementoDOM, producto){
  console.log(producto);
  // Leer la propiedad nombre del producto y cargarla dentro del `<h1>`
  // Leer la propiedad descripción del producto y cargarla dentro del `<p>`
  // Leer la propiedad imagen del producto y cargarla dentro del `<img src="">`
  // Leer la propiedad precio del producto y cargarla dentro del `<span class="precio">`
  // Asignar la clase `vip` si el producto contiene ese booleano en `true`
}