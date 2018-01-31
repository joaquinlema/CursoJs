$().ready(function(){
	var caja = $("#caja")
	console.log(caja)
	caja.css("color","red")
		.css("background-color","green")
		.css("font-size","50px")
		.css("margin-left","50px")
		.css("margin-right","50px")
		.css("width","100px")
		.css("border-left","6px solid blue");

	var especial = $(".especial")
	//especial.css("background-color","grey")

	especial.on('click',function() {
		//$(this).addClass('clase1')
		$(this).toggleClass('clase1')
	})

	//especial.off()//quita los event listenes del objeto 
	
	especial.off().on('mouseover',function(){//quita los eventos que tenia asignados y agrega el on con el evento asignado	

		$(this).css("background-color", "yellow");
	
	})
})