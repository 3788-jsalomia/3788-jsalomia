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




