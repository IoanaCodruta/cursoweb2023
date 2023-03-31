const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.shift();
document.getElementById("demo2").innerHTML = fruits;


const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruit.shift();
document.getElementById("demo4").innerHTML = fruit;


const fruitss = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruitss;
fruitss.unshift("Lemon");
document.getElementById("demo6").innerHTML = fruitss;



const fruitt = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruitt.unshift("Lemon");
document.getElementById("demo8").innerHTML = fruitt;