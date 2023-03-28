var x, y, z, w;
//asignar
x = multiplicar(4, 3);
y = dividir(8, 4);
z = sumar(4, 4)
w = restar(10, 5)

//Acciones
document.getElementById("demo").innerHTML = "El resultado de multiplicar 4*3 es " + x;
document.getElementById("demo1").innerHTML ="El resultado de dividir 8/4 es "+ y;
document.getElementById("demo2").innerHTML ="El resultado de sumar 4 + 4 es "+ z;
document.getElementById("demo3").innerHTML ="El resultado de restar 10 - 5 es "+ w;

//functiones
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}


