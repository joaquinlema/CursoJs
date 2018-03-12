(function($) {
    $.fn.doyEstilo = function(){
        return this.each(function(i,t) {
            $(this).css("backgroundColor","blue")
        });
    }
})( jQuery );