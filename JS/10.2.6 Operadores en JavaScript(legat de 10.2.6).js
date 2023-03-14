var x, y;
 // x=7;
 // y=4;
 // document.getElementById("result1").innerHTML = x+y;
 // document.getElementById("result2").innerHTML = x-y;
 // document.getElementById("result3").innerHTML = x/y;
 // document.getElementById("result4").innerHTML = x*y;
 // document.write //

    x=7;//x le asigno el valor numérico 7
    y=4;
document.getElementById("result1").innerHTML = "7 + 4 = "+ (x+y);
document.getElementById("result2").innerHTML = "7 - 4 = " + (x-y);
document.getElementById("result3").innerHTML = "7 * 4 = " + (x*y);
document.getElementById("result4").innerHTML = "7 / 4 = "+ (x/y);
document.getElementById("result5").innerHTML = "7 % 4 = "+ (x%y);
//x=x+1 este egal cu x++ si egal cu ++x
document.write("<p>El valor de x es: " + x + "</p>"); // x es 7
document.write("<p>El valor de x es: " + x++ + "</p>"); // x es 8 dar nu se vede doar daca pune o alta linie de + x +
document.write("<p>El valor de x es: " + x + "</p>");
document.write("<p>El valor de x es: " + ++x + "</p>"); // x es 9