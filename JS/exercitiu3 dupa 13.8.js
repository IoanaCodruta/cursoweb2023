//acest exercitiu are mai multe rezolvari

//exercitiu scris de Hector
// EJ 3. Escribe un programa que devuelva si un string se escribe igual de alalçnte hacia atrás 

let palindromo = "radar";
let long = palindromo.length;
let palindromo1 ="";

console.log(long)

while(long>= 0){

    palindromo1 += palindromo.charAt(long);

    long = long -1;
}
console.log("palindormo1 " + palindromo1)

if (palindromo === palindromo1){
    console.log("La palabra "+palindromo+" es un palindromo")
}
else {
    console.log("La palabra "+palindromo+" NO es un palindromo")
}





//exercitiu scris de David
function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromeChecker("anilina"));
  console.log(palindromeChecker("hola"));
  console.log(palindromeChecker("omo"));




  //exercitiu scris de Joaquin
  function verificarPalindromo() {
    // Obtener el texto del elemento de entrada
    var inputString = document.getElementById("inputString").value;

    // Eliminar caracteres no alfabéticos y convertir todo el texto a minúsculas
    var normalizedString = inputString.replace(/[\W_]/g, "").toLowerCase();

    // Invertir el string
    var reversedString = normalizedString.split("").reverse().join("");

    // Comparar el string original con el invertido
    if (normalizedString === reversedString) {
        document.getElementById("resultado").innerHTML = "El string es un palindromo";
    } else {
        document.getElementById("resultado").innerHTML = "El string no es un palindromo";
    }
}