let x = 9000.656;
document.getElementById("demo").innerHTML =
  x  + 
  "<br>" +
  x.toExponential(2) + "<br>" + 
  x.toExponential(4) + "<br>" + 
  x.toExponential(20);
  //unde ii 2, 4, 20, putem pune orice numar vrem, ii o valoare pe care noi o dam ca sa nea arate cate zecimale vrem la un numar
  