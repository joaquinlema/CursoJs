window.onload = function() {

	var persona = {
		"nombre" : null,
		"edad" : null,
		"saludar" : function() {
			console.log("hola forro" + this.nombre)
		}
	}

	var nico = persona
	nico.nombre = "Nicolas"
	nico.edad = 23
	nico.saludar()

	var mica = persona
	mica.nombre = "micalas"
	mica.edad = 23
	mica.saludar()
}