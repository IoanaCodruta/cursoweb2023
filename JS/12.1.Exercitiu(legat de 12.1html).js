//exercitiu cu notas
//var notas = [[3,"Marc"],[5,"David"],[10,"Rut"]];
//document.getElementById("array2dim").innerHTML = "La matriz notas [2][1]: " + notas[2][1];


// Propiedad length
//var coches =["Opel", "Tesla", "Ford", "Citroen"];
//document.getElementById("tamanarray").innerHTML = "El tamano del array bici es: " + coches.length;

//Recorrer array
//for  (let i=0; i< coches.length; i++) {
//    console.log(coches[i]);}


//Exercitiu cu tema lenguaje Recorrer array

var lenguaje = ["html", "css", "js", "php"];
document.getElementById("lenguaje").innerHTML = "El lenguaje del array bici es: " + lenguaje.length;
for  (let i=0; i< lenguaje.length; i++) {
    console.log(lenguaje[i]);
    document.write(lenguaje[i] + ", ");
}