$(document).ready( function(){
     $("#bt").click(function(){
        var nombr = $("#nombre").val();
        $("#mostrar").html(nombr);
    });

    $("#borrar").click(function(){
        $("#borrar").css("display", "inherit").fadeOut(200);
    });
});
