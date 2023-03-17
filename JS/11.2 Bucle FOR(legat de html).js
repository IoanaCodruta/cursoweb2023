//bucle for-exemplul de jos pune titlurile de la 1 la 6 in ordine de la mare la mic  
//function myFunction() {
  //  var x ="", i;
 //       for (i=1; i<=6; i++) {
 //       x = x + "<h" + i + ">Titular " + i + "</h" + i + ">"      }
  //  document.getElementById("demo").innerHTML = x;   }

  
  //bucle for-exemplul de jos pune titlurile de la 6 la 1 in ordine de la titlul mic la titlul mare  
 function myFunction() {
    var x ="", i;
        for (i=6; i>=1; i--) {
         x = x + "<h" + i + ">Titular " + i + "</h" + i + ">";
         }
     document.getElementById("demo").innerHTML = x;
         }