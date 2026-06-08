async function obtenerClima(){
    var ciudad = document.getElementById("ciudad").value;
    var apiKey = "3959d33a2ef2bece84bdaebbc2fdfc0d";
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
    try{
        var respuesta = await fetch(url);
        if(!respuesta.ok){
            throw new Error("Ciudad no encontrada");
        }
        var datos = await respuesta.json();
        document.getElementById("resultado").innerHTML = `El clima en ${ciudad} es ${datos.weather[0].description}
        con una temperatura de ${datos.main.temp}°C.`;
    }
    catch(error){
        document.getElementById("resultado").innerHTML = "Error al obtener el clima: " + error.message;
    }
}