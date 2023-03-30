let text = "50";
text = text.padStart(8,"xxxx");

document.getElementById("demo").innerHTML = text;


let text1 = "5";
text1 = text1.padEnd(4,"0");

document.getElementById("demo1").innerHTML = text1;