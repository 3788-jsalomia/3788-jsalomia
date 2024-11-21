/*Boton ENVIAR DATOS*/
//Obtenemos la referencia del checboc y boton
const checkbox=document.getElementById('checkbox1');
const button=document.getElementById('myButton');
//Realizamos los cambios
checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        button.disabled=false;
        button.classList.remove('disabled');
        button.classList.add('enabled');
    }else{
        button.disabled=true;
        button.classList.remove('enabled');
        button.classList.add('disabled');
    }
});



/*Checbox numero 2*/
const checkbox_2=document.getElementById('checkbox2');
const formulario=document.getElementById('formulario2');

//Cambios
checkbox_2.addEventListener('change', () => {
    if (checkbox_2.checked) {
        formulario.style.display = 'block'; // Mostrar formulario
    } else {
        formulario.style.display = 'none'; // Ocultar formulario
    }
});




/*Codigo para formulario Contacto*/

var expression="/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i";
valor=document.getElementById('campo').value;
telefono=document.getElementById('campo3').value;

function validar(telefono){
    /*alert('Formulario enviado');*/
    
    expression.test(valor);

    

    if((telefono.length==10) && (!isNaN(telefono))){
        alert('valido');
        return 'Valido';
    }else{
        alert('invalido');
        return 'InValido';
    }

    document.getElementById('formContacto').submit();
}