// Primer ejercicio
var sales = "toyota";

function carTypes(name) {
    if (name === "Honda") {
        return name;
    } else {
        return "Lo sentimos, no vendemos " + name;
    }
}

var car = {myCar: "Saturn", getCar: carTypes("Honda"), special: sales};

console.log(car.carTypes("Honda"));
console.log(car.special);
console.log(car.myCar);

// Array de otro array
var car = { manyCars: {a: "SAAB", b: "Jeep"}, 7: "Mazda"};

console.log(car[7]); // Mazda (7 = KEY)
console.log(car.manyCars.b); // Jeep

// Literal de cadena
let saludo = "hola";

console.log('Hola ${saludo}');

