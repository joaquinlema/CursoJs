$(function(){
    var titulos = document.querySelectorAll(".products");
    var verMas = document.querySelectorAll(".verMas");
    
    var primerTit = titulos[0];
    var segundoTit = titulos[1];
    
    primerTit.innerHTML = "ARTICULOS DESTACADOS";
    primerTit.classList.add(".top");
    
    segundoTit.innerHTML = "ULTIMOS ARTICULOS";
    
    verMas.forEach(function(item,i) {
        item.innerHTML = "VER+";
        item.style.color = "#045fae";
    })

    var productoDatos = ["cod 001","JoacoInc","deliver02",50];

    var productoModNom = document.querySelector(".grid-chain-bottom h6");
    productoModNom.innerHTML = productoDatos[1] + " - " + productoDatos[2];

    var productoModPrec = document.querySelector(".grid-chain-bottom .dolar-grid .actual");
    productoModPrec.innerHTML = "$" + productoDatos[3];

    var prodImg = document.querySelectorAll(".img-responsive");

    prodImg.forEach(function(item,i){
        item.src = "images/productos/js.png";
    });

    prodImg[0].src = "images/productos/jquery.png";
})