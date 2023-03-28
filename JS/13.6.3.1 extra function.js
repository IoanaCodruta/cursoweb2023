//var let const
//crear una function anonima asignada a una variable
let sumando = function(a, b) {
    console.log(a + b);
  };
  sumando(2, 3);
  sumando(10, 7);


  //function autoejecutable

  (function saludar() {
        console.log("Hola");
  })();
  //error no puede ser llamada "invocada"
  //saludar();


  //function normal 
  function function0(altura){
    return (5 * altura) / 2;
  };

  //function anonima
  let function1 = function(altura) {
    return(5 * altura) /2;
  };

  //function de flecha
  const function2 = (altura) => {
    return (5 * altura) / 2;
  };
  
  //forma simplificada de la function de flecha
  const function3 = (altura) => ( 5 * altura) / 2;

  console.log (function0(3));
  console.log ( function1(3));
  console.log ( function2(3));
  console.log ( function3(3));
 