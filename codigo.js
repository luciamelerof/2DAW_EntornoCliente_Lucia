// Código javascript
console.log("hello class!");

// Declarar variable: puede ser número, texto, todos los tipos
let variable; // solo disponible en su bloque
var variable2; // disponible en todo el código

console.log("La variable es indefinida " + variable);

console.log(x == undefined); // TRUE, ya que antes del log aún NO SE HA DEFINIDO LA VARIABLE.
var x = 3;

console.log(x == undefined); // REFERENCEERROR, ya que aún no existe la variable, se ejecuta secuencialmente.
let x = 3;

//  IMPORTANTE

let x2 = 20;

if (true) {
    x2 = 30;
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




