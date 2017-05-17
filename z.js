$(document).ready(function(){

$("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        $("#trunks").css("left", $("#trunks").offset().left - 10);
        
    } else if (event.which === 39) {
        $("#trunks").css("left" ,$("#trunks").offset().left + 10);

    } else {
        return;
    }
    
});














    
});
