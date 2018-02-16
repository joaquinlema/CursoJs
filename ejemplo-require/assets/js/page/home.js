define(['jquery', 'underscore'], function($,_){
	
	var total = _.random(10, 80);
	
	var recursos = {
		data : 'Datos definidos en el modulo home',
		cantidad : total,
		librerias : {
			jquery: $,
			underscore : _
		}
	};
	
	return recursos;
});