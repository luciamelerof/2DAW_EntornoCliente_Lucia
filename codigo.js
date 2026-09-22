// Código javascript
console.log("hello class!");

// Declarar variable: puede ser número, texto, todos los tipos
let variable; // solo disponible en su bloque
var variable2; // disponible en todo el código

console.log("La variable es indefinida " + variable);

console.log(xv == undefined); // TRUE, ya que antes del log aún NO SE HA DEFINIDO LA VARIABLE.
var xv = 3;

console.log(x == undefined); // REFERENCEERROR, ya que aún no existe la variable, se ejecuta secuencialmente.
let x = 3;

//  IMPORTANTE

let x2 = 20;

if (true) {
    let x2 = 30;
    console.log(x2); // Imprime 30, ya que se escribe dentro del bloque IF
}

console.log(x2); // Imprime 20, ya que ya no pertenece al bloque donde se ha cambiado el valor

// FUNCIONES

// Variable que pertenece al ámbito exterior (global, en este ejemplo)
var myVar = "my value";

// Esta es una función que se crea y se ejecuta inmediatamente.
// Se llama IIFE (Immediately Invoked Function Expression).
(function() {

    // ⚠️ ESTA myVar es una VARIABLE DIFERENTE de la de fuera.
    // Pertenece al ámbito LOCAL de esta función.
    //
    // Como usamos "var", su declaración se eleva (hoisting)
    // al principio de la función.
    //
    // JavaScript lo interpreta aproximadamente así:
    //
    // var myVar;
    
    var myVar;

    // En este momento la myVar LOCAL existe,
    // pero todavía no se le ha asignado ningún valor.
    // Por eso vale undefined.
    //
    // IMPORTANTE:
    // NO está utilizando la myVar de fuera.
    console.log(myVar); // undefined

    // Ahora asignamos un valor a la myVar LOCAL.
    myVar = "valor local";

})();

// Las funciones se pueden usar antes de haberlas declarado o después

foo();

function foo() {
    console.log("bar");
}

// Otro ejemplo 
var suma = function (a, b) {
   return a+b;
}

console.log(suma(2,3));

// Constante 
const pi = 3.14;
console.log(pi);

// (HASHMAP) Objetos en JS Clave valor, en este caso: marca, clave. const/ var obj = { key: "value" };
// Diferencia const / var: los valores como seat... se pueden cambiar en cualquier momento, pero en const, los atributos 
// son constantes, y en var, hasta en ejecución, se puede añadir nuevos atributos.

const obj1 = { marca : "seat", modelo : "ibiza", color : "azul"};

console.log(obj1.marca);

obj1.modelo = "leon";
console.log(obj1.modelo); // muestra leon

console.log(obj1);

// ARRAYLIST: 
// Con const, se puede cambiar el contenido pero no la estructura. 
// Con var, sí.
const MY_ARRAY = ["HTML", "CSS"];

// Añadir cosas al array
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY);

// CONVERSIÓN DE TIPOS 
var y = 1;
console.log(y+1); // 2
y="verde";
console.log(y + 1); // verde1

y = "1"; 
console.log(y+1); // esto muestra 11.

// SI QUIERES QUE MUESTRE 2: 
console.log(parseInt(y) + 1);

// EN CAMBIO, CON EL OPERADOR MENOS, ES EXCLUSIVO MATEMATICAMENTE
"37" - 7; // 30
"30" + 12 // 3012




