// script.js

document.addEventListener("DOMContentLoaded", function() {
    
    const btnCalcula = document.getElementById("btnCalcula");
    const divResultado = document.getElementById("resultado");

    btnCalcula.addEventListener("click", function() {
        
        // 1. Obtener los valores que el usuario escribió
        const baseOrigen = parseInt(document.getElementById("baseOrigen").value);
        // Lo pasamos a mayúsculas por si escriben letras en hexadecimal (ej. a -> A)
        const numero = document.getElementById("numero").value.trim().toUpperCase(); 
        const baseDestino = parseInt(document.getElementById("baseDestino").value);

        // 2. Validación: Verificar que no haya campos vacíos
        if (isNaN(baseOrigen) || isNaN(baseDestino) || numero === "") {
            divResultado.textContent = "Falta llenar campos";
            divResultado.style.color = "red";
            return; // Detiene la función aquí
        }

        // 3. Convertir el número original a Decimal (Base 10)
        // parseInt lee un string y la base en la que está escrito
        const numeroEnDecimal = parseInt(numero, baseOrigen);

        // 4. Validación: Verificar si el número concuerda con la base
        // (Ejemplo: si pones el número "3" en base "2", marcará error)
        if (isNaN(numeroEnDecimal)) {
            divResultado.textContent = "Número no válido para esa base";
            divResultado.style.color = "red";
            return;
        }

        // 5. Convertir el Decimal a la Base Destino
        // toString(base) convierte el número a la base solicitada
        let resultadoFinal = numeroEnDecimal.toString(baseDestino);
        
        // Lo pasamos a mayúsculas para que las letras en base 16 se vean mejor
        resultadoFinal = resultadoFinal.toUpperCase();

        // 6. Mostrar el resultado en pantalla
        divResultado.textContent = "Resultado: " + resultadoFinal;
        divResultado.style.color = "green";
    });

});