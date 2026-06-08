
document.addEventListener("DOMContentLoaded", function() {
    
    const btnCalcula = document.getElementById("btnCalcula");
    const divResultado = document.getElementById("resultado");

    btnCalcula.addEventListener("click", function() {
        const baseOrigen = parseInt(document.getElementById("baseOrigen").value);
        const numero = document.getElementById("numero").value.trim().toUpperCase(); 
        const baseDestino = parseInt(document.getElementById("baseDestino").value);
        if (isNaN(baseOrigen) || isNaN(baseDestino) || numero === "") {
            divResultado.textContent = "Falta llenar campos";
            divResultado.style.color = "red";
            return;
        }
        const numeroEnDecimal = parseInt(numero, baseOrigen);
        if (isNaN(numeroEnDecimal)) {
            divResultado.textContent = "Número no válido para esa base";
            divResultado.style.color = "red";
            return;
        }
        let resultadoFinal = numeroEnDecimal.toString(baseDestino);
        resultadoFinal = resultadoFinal.toUpperCase();
        divResultado.textContent = "Resultado: " + resultadoFinal;
        divResultado.style.color = "green";
    });

});