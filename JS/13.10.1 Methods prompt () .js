function myFunction() {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }
  function myFunction1() { 
  let valor1  = prompt("Escribe un color", "red");
  let valor2  = prompt("Escribe un segundo color", "yellow");
  let valor3  = prompt("Escribe un tercer color", "blue");


    if ((valor1 != null)  && (valor2 != null) && (valor3 != null)) {
      document.getElementById("demo1").innerHTML =
      "The colors are " + valor1 + "," + valor2 + "," + valor3 + "." +"What color do you like?";
    }
    }   