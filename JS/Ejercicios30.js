
var person = {
    nombre: "Mundo!", 
    fullName:function () {
          return "Hola " + this.nombre;
        }
      };
      document.getElementById("demo").innerHTML = person.fullName();