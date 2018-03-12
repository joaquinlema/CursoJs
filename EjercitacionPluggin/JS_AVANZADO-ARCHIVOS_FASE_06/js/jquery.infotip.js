$.fn.infotip = function(data){
	$(this).css("cursor", "pointer");
    $(this).hover(
        function(){ //Aca es cuando entra
            if( $(this).data( data ) ){
               //$(this).css("position", "relative");
                $(this).append("<div class='titulo'>" + $(this).data( data ) + "</div>");
                $(this).children(".titulo").css({
                        "position" : "absolute",
                        "background" : "rgba(0,0,0,.75)",
                        "color": "#FFF",
                        "padding": "5px 10px",
                        "width" : $(this).width() * 1.5,
                        "border-radius": 5,
                        "font-size": 18,
                        "top" : $(this).position().top,
                        "left" : $(this).position().left,
                        "z-index" : 1,
                        "transform" : "translateY(-50%)"
                });
            }
        }, function(){ //Aca es cuando sale
            $(this).children(".titulo").remove();
        }
    );

}