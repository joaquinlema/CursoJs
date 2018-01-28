window.onload = function(){
	
	//alert("hola chabon");
	

	var nombre = "jose";
	var cantidad =  55;
	var lista = ["alfa","beta","gama"];
	var listaDic = {"prop1":"alfa",
					"prop2":"beta",
					"prop3":"gama"};

	console.log("escribimos algo");

	console.warn("warning");

	console.log("Nombre ",nombre," cantidad",cantidad);

	var j = 0;
	for (var i = j; i < lista.length; i++) {
		console.log(lista[i]);
	}


	//solo para obj no para array
	for(var item in listaDic){
		console.log(item);
	}

	console.log("contenido obj: ",listaDic)

//	var nodo_caja1 = document.querySelector("#terDiv").style.color= "white";
	
	//tomo el valor de la query y la guardo en una variable para mantener la referencia
	var nodo_caja1 = document.querySelector("#terDiv");//devuelve un nodo

	console.log(nodo_caja1)
	
	nodo_caja1.style.fontWeight = "bold";

	//agrego a la lista de clases de esa variable una clase que tengo definida en otro lado 
	nodo_caja1.classList.add("gigante");
	nodo_caja1.classList.add("justificado");

	var r = document.querySelectorAll("p");//Devueklve un array de objetos nodo
	console.log(r);

	for (var h = 0; h < r.length; h++) {
		r[h].style.color = "green";
	}

	//hacer foreach o usar foreach
	r.forEach(function(rs,i){
		rs.style.color = "yellow";
	})

	var hijos = document.querySelectorAll("#segundoDiv p");
		
	hijos.forEach(function(p,j){
		p.style.backgroundColor = "orange";
	})


	var hijosDirectos = document.querySelectorAll("#segundoDiv>p");
		
	hijosDirectos.forEach(function(p,j){
		p.style.backgroundColor = "green";
	})

	var hijosNietos = document.querySelectorAll("#segundoDiv div");
		
	hijosNietos.forEach(function(p,j){
		p.style.backgroundColor = "white";
	})

	var empiezanCon = document.querySelectorAll("div[id^=ter]");
		
	empiezanCon.forEach(function(p,j){
		p.style.backgroundColor = "pink";
	})

	var primerHijo = document.querySelector("#terDiv> p:nth-child(1)");

	primerHijo.onclick = function() {
		alert("cambiamos html");
		this.innerHTML = "<i>hola</i>";
	}
	
};