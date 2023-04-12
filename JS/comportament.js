function primero() {
    document.getElementById("IdFunction").innerHTML = "Hola!";
    }

var x, y;
x = multiplicar(4, 3);
y = dividir(8, 4);

document.getElementById("demo").innerHTML = "El resultado de multiplicar 4*3 es " + x;
document.getElementById("demo1").innerHTML ="El resultado de dividir 8/4 es "+ y;

function multiplicar(a, b) {
    return a * b;
      }
      
function dividir(a, b) {
    return a / b;
      }
   

    