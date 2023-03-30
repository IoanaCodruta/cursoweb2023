
let texto1 = "primul";
let texto2 = "doilea"

if (texto1.charAt(0) === texto2 [0]) // &&(texto1.charAt(1) === texto2[1]) 
{
    console.log("si tienen la misma letra inicial")
} else {
    console.log("no tienen la misma letra inicial ")
}

if (texto1.slice(0,2) === texto2.slice (0,2)) {
    console.log("si tienen las primeras letras iguales")
} else {
    console.log("no tienen las primeras letras iguales ")
}
