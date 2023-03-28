function convertir() {
    var temp = document.getElementById("inputTemp").value;
    var farenheit = document.getElementById("farenheit").checked;
    var resultado = document.getElementById("resultado");

    if (farenheit) {
        // Convertir de Farenheit a Celsius
        var celsius = (temp - 32) * 5/9;
        resultado.innerHTML = temp + " °F son " + celsius.toFixed(2) + " °C";
    } else {
        // Convertir de Celsius a Farenheit
        var farenheit = (temp * 9/5) + 32;
        resultado.innerHTML = temp + " °C son " + farenheit.toFixed(2) + " °F";
    }
}