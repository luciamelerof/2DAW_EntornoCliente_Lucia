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

console.log(car.getCar);
console.log(car.special);
console.log(car.myCar);

// Array de otro array
var car = { manyCars: {a: "SAAB", b: "Jeep"}, 7: "Mazda"};

console.log(car[7]); // Mazda (7 = KEY)
console.log(car.manyCars.b); // Jeep

// Literal de cadena
let saludo = "hola";

console.log(`Hola ${saludo}`);

// x++ frente ++x
var x = 3;
console.log(x++); // 3
x = 3;
console.log(++x); // 5

// BUCLES

function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});

