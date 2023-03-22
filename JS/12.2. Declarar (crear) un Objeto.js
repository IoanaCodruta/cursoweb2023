var persona = {

    nombre : "John",
    apellido : "Smith",
    edad : 53,
    "color ojos" : "azules"
     };
    document.getElementById("demo").innerHTML = persona.nombre + " tiene " + persona.edad + " anos y tiene el coplor de ojos " + persona["color ojos"];



    //Ejemplo de variable objecto con propriedads; atributos,  (variable) y metodos (functiones)
    //Ejemplo de variable OBJETO con propiedades: atributos (variables) y métodos(funciones)
    var person = {
        //PROPIEDADES

        // Atributos
        firstName: "John",
        lastName: "Doe", 
        id: 5566,
        // Método
        fullName: function () {
          return "El nombre es " + this.firstName + " " + this.lastName + " y su id es " + this.id;
        }
      };
      document.getElementById("objetoComplejo").innerHTML = person.fullName();
      //tip de variable
      console.log (typeof "John Doe");
      console.log (typeof (3.14));
      console.log (typeof person)

      //variable indefinida
      var coche;

      document.getElementById("indefinida").innerHTML = coche + "<br>" + typeof coche;

      //variable vacia
      var car = "";
      document.getElementById("vacia").innerHTML = "El valor es:" + typeof car;
