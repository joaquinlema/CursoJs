window.onload = function() {

	function persona () {
		this.nombre = null
		this.edad = null
		this.saludar = function () {
			console.log("hola "+this.nombre)
		}
	}

	var nico = new persona()
	nico.nombre = "Nicolas"
	nico.edad = 23
	nico.saludar()

	var mica = new persona()
	mica.nombre = "micalas"
	mica.edad = 23
	mica.saludar()
}