window.onload = function() {

	unction persona (nom,edad) {
		
		this.nombre = null //aspecto publico, todo lo que tenga this es publico
		this.edad = null
	
		var constructor = function(nom,edad) {
			this.nombre = nom
			this.edad = edad
		}

		constructor(nom,edad)
	
		var welcome = function () { //definido a nivel local osea privado
			return "hola "+this.nombre 
		}

		this.saludar = function () {
			console.log(welcome(), this.edad) 
		}

		var validacion = function(edad) {
			return  (edad > 18)
		}

		this.cambiarEdad = function(nuevEdad) {
			if (validacion(nuevEdad)) {
				this.edad = nuevEdad
			};
		}
	}

	var nico = new persona()
	nico.saludar()

	var mica = new persona()
	mica.saludar()
}