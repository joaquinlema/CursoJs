//Pluggin de prueba de cambio de color del elemento recibido con uso de buenas practicas para el uso de $ no conflict
// utilizando clousure 
(function($) {
    //definimos la extencion de funcionalidad para metodos JQuery
    $.fn.cambioColor = function(){

        this.css("background-color", "red");

        return this;
    };
}( jQuery ));