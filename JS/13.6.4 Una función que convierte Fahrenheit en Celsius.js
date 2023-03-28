function FahrenheiTaCelsius(f) {
    return (5/9) * (f+50);
        }
document.getElementById("demo").innerHTML = " 100 grade F son " +  Math.round   (FahrenheiTaCelsius (32))  +  " grade C ";