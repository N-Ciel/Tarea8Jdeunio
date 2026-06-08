document.addEventListener("DOMContentLoaded", function() {
    const botonEnviar = document.getElementById("btnEnviar");
    const mensajeAviso = document.getElementById("mensajeAviso");
    const formulario = document.getElementById("miFormulario");
    botonEnviar.addEventListener("click", function() {
        const todosLosInputs = formulario.querySelectorAll("input");
        let estaVacio = false;
        todosLosInputs.forEach(function(input) {
            if (input.value.trim() === "") {
                estaVacio = true; 
            }
        });
        if (estaVacio === true) {
            mensajeAviso.textContent = "Falta llenar :(";
            mensajeAviso.style.color = "red";
        } else {
            mensajeAviso.textContent = "GRACIAS :) POR LLENAR!!!";
            mensajeAviso.style.color = "green";
        }
    });
});