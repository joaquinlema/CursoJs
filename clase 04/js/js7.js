window.addEventListener("load",pedirPais)

function pedirPais(){

	var xhr = new XMLHttpRequest()
	xhr.open("GET","ajax/paises.json")
	xhr.addEventListener("load",cargarCombo)
	xhr.send()

}

function cargarCombo(e) {
//podria usar e.target.responseText para evitar el uso de variable globales
//	var paises = JSON.parse(xhr.responseText)

	var paises = JSON.parse(e.target.responseText)
	var textoPais = "Seleccione un Pais"
	var paisesCombo = document.querySelector("#pais")

	vaciarContenido(paisesCombo)
	cargarOption(paisesCombo,textoPais)

	for(var item in paises){
	/*	var optionTag = document.createElement("option")
		optionTag.value = item //le asigno el valor para cada item que es lo que se envia al servidor
		optionTag.innerHTML = paises[item] //forma logica de obtener con la clave el valor para ese objeto json, 1º item = arg, 2º = br; luego paises[arg] = argentina
		paisesCombo.appendChild(optionTag)*/
		cargarOption(paisesCombo,paises[item],item)

	}

	paisesCombo.addEventListener("change",pedirProv)

}

function pedirProv(e) {//evento de cambio 

	var xhr = new XMLHttpRequest()
	xhr.open("GET","ajax/provincia_"+e.target.value+".json") //tomo el valor de la opcion seleccionada
	xhr.addEventListener("load",cargarComboProv)
	xhr.send()

}

function cargarComboProv(argument) {
	
	var provinciasCombo = document.querySelector("#provincia")
	var texto = "Seleccione Provincia"

	if(argument.target.status == 200){	
		
		var provincias = JSON.parse(argument.target.responseText)
		
		vaciarContenido(provinciasCombo)
		cargarOption(provinciasCombo,texto,0)

		for(var item in provincias){
			cargarOption(provinciasCombo,provincias[item],item)
		}

	}else{
			vaciarContenido(provinciasCombo)
			cargarOption(provinciasCombo,texto)			
		}
}

function cargarOption(combo,contenido,valor) {

	var optionTag = document.createElement("option")
	optionTag.value = valor //le asigno el valor para valiudar que se elegio un pais
	optionTag.innerHTML = "" + contenido 
	combo.appendChild(optionTag)

}

function vaciarContenido(elemento) {

	elemento.innerHTML = "";

}