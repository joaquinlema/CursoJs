window.onload = function() {

	function persona (opciones) {
		
		var that = this;
		
		that.nombre; //aspecto publico, todo lo que tenga this es publico
		that.edad;
	
		/*var constructor = function(nom,edad) {
			that.nombre = nom
			that.edad = edad
		}

		constructor(nom,edad)
	*/
		(function(opc){
			
			var opcionesDefault = {
				nombre : "sin nombre",
				edad : 19
			}

			var opc_final = Object.assign(opcionesDefault,opc)//1º objeto base, 2º objeto qeu busca rellenar el objeto base

			that.nombre = opc_final.nombre //para el caso que no se asigne valor 
			that.edad = opc_final.edad

		})(opciones)

		var welcome = function () { //definido a nivel local osea privado
			return "hola "+that.nombre 
		}

		that.saludar = function () {
			console.log(welcome(), that.edad) 
		}

		var validacion = function(edad) {
			return  (edad > 18)
		}

		that.cambiarEdad = function(nuevEdad) {
			if (validacion(nuevEdad)) {
				that.edad = nuevEdad
			};
		}
	}

	var nico = new persona("nombre",12)
	nico.saludar()

	var mica = new persona("mica",22)
	mica.saludar()
}