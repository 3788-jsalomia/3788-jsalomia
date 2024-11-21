/*Codigo para formulario Contacto*/


function validar() {
    var formvalido = true;
    var eValido = true;
    /*Email*/
    var valor = document.getElementById('campo').value;
    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if (expresion.test(valor) == true) {
        alert('Email correcto');
        eValido = true;
    } else {
        alert('Email incorrecto');
        eValido = false;
    }
    /*Telefono*/
    var telefono = document.getElementById('campo3').value;

    if ((telefono.length == 10) && (!isNaN(telefono))) {
        alert("Telefono valido");
        formvalido = true;

    } else {
        alert("Telefono invalido");
        formvalido = false;
    }
    /*Boton*/
    var boton = document.getElementById('boton');

    // Deshabilitar el botón
    boton.disabled = true;


    // Cambiar mensaje del botón
    boton.value = "Enviando datos...";

    this.form.submit();

}