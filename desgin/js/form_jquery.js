
// jquery para validar form decontacto


// variable que contiene exprecion regular de validacion de  emails
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#enviar").click(function(){
        var nombre = $("#name").val();
        var numero = $("#numero").val();
        var correo = $("#email").val();
        var campo = $("#campo").val();

        if (nombre =="") {
            $("#mensaje-1").fadeIn();
            return false;
        } else{
            $("#mensaje-1").fadeOut();
            if (correo == "" || !expr.test(correo)) {
                $("#mensaje-2").fadeIn();
                return false;
            }else{
                $("#mensaje-2").fadeOut();
                if (numero == "") {
                    $("#mensaje-3").fadeIn();
                    return false;
                }
            }
            $("#mensaje-3").fadeOut();
            if (campo =="") {
                $("#mensaje-4").fadeIn();
                return false;
            }
        }
    });
});
