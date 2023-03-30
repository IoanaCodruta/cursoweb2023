let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("lenght").innerHTML = text.length;


let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(15,19); //kiwi
part1 = text1.slice(7); // banana kiwi (desde el valor 7)
console.log(part1);

part2 = text1.slice(-12); // banana kiwi (los 12 ultimos valores)
console.log(part2);

part3 = text1.slice(-12, -6); // banana (del -12 al -6  )
console.log(part3);

document.getElementById("slice").innerHTML = part; 