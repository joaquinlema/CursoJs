String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//------------------------------------------------------------

function cambiarNickTitulo(n){
	document.querySelector("#lblnombre").innerHTML = n.toLowerCase().capitalize();
}
function cambiarColorFondo(c){
	document.querySelector("body").style.background = c;
}
function cambiarColorLetra(c){
	document.querySelector("body").style.color = c;
}
function cambiarTipoLetra(t){
	document.querySelector("body").style.fontFamily = t;
}


function logout(){			
	localStorage.removeItem("nick");
	location.href = "index.html";
}