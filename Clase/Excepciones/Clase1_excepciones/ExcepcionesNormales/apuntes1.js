console.log(45 % 2);

console.log(Math.PI % 3.14);

// Excepción normal
class NumeroEnteroValidation extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.nombre = "NumeroEnteroValidation";
        this.autor = "LUCIA MELERO";
    }
}

function readInt(n) {
    if (!Number.isInteger(n)) {
        throw new NumeroEnteroValidation("no se ha enviado número entero.");
    }

    return n;
}

try {
    let numero = 1;
    readInt(numero);
} catch (err) {
    if (err instanceof NumeroEnteroValidation) {
        alert("Dato inválido: " + err.message);
        alert("Excepción arrojada por: " + err.nombre + ", de " + err.autor);
    } else if (err instanceof SyntaxError) {
        alert("Error sintaxis: " + err.message);
    } else {
        throw err;
    }
}



