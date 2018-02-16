$().ready(function(){
	
	$('.products h5').eq(0).html('ARTICULOS DESTACADOS').addClass('latest-product top');
	$('.products h5').eq(1).html('ULTIMOS ARTICULOS').addClass('latest-product');
	
	$('.star-price a').html('VER +').css('color','#045fae')

	var productoMod = {
		"nombre" : "mi Nombre",
		"precio" : 222,
		"img" : "images/productos/P008.jpg"
	}

	$('.grid-chain-bottom h6 a').eq(0).html(productoMod.nombre);
	$('.grid-chain-bottom .star-price .dolar-grid span').eq(0).html('$' + productoMod.precio);
	$('.producto a img').eq(0).attr('src',productoMod.img)		

	var ultimosProd = $('#destacados').clone();

	$('#page').append(ultimosProd);


})