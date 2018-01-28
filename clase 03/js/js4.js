		var nombre = "Clima";
		var temp = 27;
		
		//version clasica previa a JSON
		var arrayClas = new Array("Dom","Sab","vie","lun","mar","mier","jue");

		//JSON
		var dias = ["Dom","Sab","vie","lun","mar","mier","jue"];


		//clasica
		var clima = new Object(); //no es buena practica 
		clima.dia = "martes";
		clima.temp = 26;

		//con JSON
		var climaJson = {
			"dia" : "martes",
			"temp" : 26
		};

		//alert(climaJson.dia);

		var datos = {
			"nublado" : [true,false],
			"dias" : dias,
			"encargado" : {
				"nombre" : "Lucas",
				"Edad" : 26	
			}
		};

		console.log(datos.encargado.nombre,datos.dias[0],datos.nublado[0]);
		
		//metodo para serializar JSON, es decir pasarlo de JSON a texto, esto se usa para pasar valores al servidor
		var jsonTexto = JSON.stringify(datos);
		console.log(jsonTexto);
		
		//imprimo JSON para ver que es un objeto al pedo lo hago 
		console.log(datos);

		//metodo para pasar texto a json
		var textoJson = JSON.parse(jsonTexto);
		console.log(textoJson);

		//forma de cargar un string de datos para parsearlo a JSON
		var texto = '{"name":"John", "age":30, "city":"New York"}';
		var jt = JSON.parse(texto);
		console.log(jt);

				
		