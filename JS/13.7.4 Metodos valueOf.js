let x = 123;

document.getElementById("demo").innerHTML = 
   x.valueOf() + "<br>" +
  (123).valueOf() + "<br>" +
  (100 + 23).valueOf();

  //valueof mentine valoarea lui x sub forma numerica chiar daca ar fi un string 