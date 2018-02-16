/*var entidades = (function() {
		var persona = function(n,e) {//si agrego metodos aca para usarlos en distintas instancias crea una copia en cada instancia ocupando memoria innecesariamente
		
		this.nombre = n || null;
		this.edad = e || null;

	}

	persona.prototype.saludar = function() {//agrego al prototypo de persona un metodo general para evitar la repeticion del metodo en todas las instancias
		console.log("hola soy ",this.nombre," tengo: ",this.edad);	
	}

	var programador = function(nombre,edad,l) {
		
		persona.call(this, nombre,edad) //uso call simulando el super en java, paso el contexto con this y luego los parametros que faltan para completar
		this.lenguaje = l || null;

	}

	//programador.prototype = new persona();//mas costoso en memoria y en creacion 
	programador.prototype = Object.create(persona.prototype);//mejor rendimiento duplica el objeto persona 
	programador.prototype.constructor = programador;
	programador.prototype.saludar = function() {//sobreescribo saludar para el objeto programador
		bienvenida.call(this);
		persona.prototype.saludar.call(this);//similar a super en herencia java,utilizo el call para indicar que estoy utilizando la fn de otro prototipo
		console.log("Hello ",this.lenguaje);
	}

	var bienvenida = function () {
		console.log("%cEsto es bla bla "+this.nombre," color:red;background:black");
	}

	return {
		"persona" : persona,
		"programador" : programador
	}

})()
*/
var app = app || {};

Object.assign(app,(function() {//$.extend(obj,obj2)
		var persona = function(n,e) {//si agrego metodos aca para usarlos en distintas instancias crea una copia en cada instancia ocupando memoria innecesariamente
		
		this.nombre = n || null;
		this.edad = e || null;

	}

	persona.prototype.saludar = function() {//agrego al prototypo de persona un metodo general para evitar la repeticion del metodo en todas las instancias
		console.log("hola soy ",this.nombre," tengo: ",this.edad);	
	}

	var programador = function(nombre,edad,l) {
		
		persona.call(this, nombre,edad) //uso call simulando el super en java, paso el contexto con this y luego los parametros que faltan para completar
		this.lenguaje = l || null;

	}

	//programador.prototype = new persona();//mas costoso en memoria y en creacion 
	programador.prototype = Object.create(persona.prototype);//mejor rendimiento duplica el objeto persona 
	programador.prototype.constructor = programador;
	programador.prototype.saludar = function() {//sobreescribo saludar para el objeto programador
		bienvenida.call(this);
		persona.prototype.saludar.call(this);//similar a super en herencia java,utilizo el call para indicar que estoy utilizando la fn de otro prototipo
		console.log("Hello ",this.lenguaje);
	}

	var bienvenida = function () {
		console.log("%cEsto es bla bla "+this.nombre," color:red;background:black");
	}

	return {
		"persona" : persona,
		"programador" : programador
	}

})())
