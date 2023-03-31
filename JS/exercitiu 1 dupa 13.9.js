//Ejercicio 1: escribe un programa que genere un array de 6 valores de tipo number y sean mostrados en pantalla utilizando un bucle for clásico y un bucle for...of

let number = ["0","1","2","3","4","5"];
for (const value of number) {
  console.log(value);
}

//exercitiu 1 facut de Gemma in doua forme cu for clasic si for of
//var matriz=[];
//for (i = 0; i < 6; i++) {
//matriz.push(i);
//}
////console.log(matriz);
//for (let elemento of matriz) {
//console.log(elemento);
//}



//Ejercicio 2 : escribe un programa que almacene los nombres de tres colores en un array y los muestre por pantalla mediante un bucle for...of


let color = ["red", "yellow", "blue"];

for (let value1 of color) {
  value += 0;
  console.log(value1);
}
document.getElementById("demo2").innerHTML = color;


//Ejercicio 3: escribe un programa con un array que almacene los nombres de tres colores.A continuación, crea otro array vacío e inserta en él todos los elementos del primer array mediante un for...of y el método push.