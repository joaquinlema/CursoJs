$.fn.agrandar = function () {
	$(this).html('Js is fun!!!!')
		.css("font-family","arial")
		.on('mouseover',pintar)
		.on('mouseout',despintar)
		.css("font-size","100px")

	return $(this) //devuelvo objeto jquery para poder seguir utilizando la concatanacion de la libreria
}

function pintar(argument) {
	var nodoOriginalH1 = argument.target
	$(nodoOriginalH1).addClass('activo')
}

function despintar(argument) {
	var nodoOriginalH1 = argument.target
	$(nodoOriginalH1).removeClass('activo')
}