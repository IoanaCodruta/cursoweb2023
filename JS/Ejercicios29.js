
    var person = {
    nombre: "Antonio", 
    fullName:function () {
          return "Hola " + this.nombre;
        }
      };
      document.getElementById("demo").innerHTML = person.fullName();

