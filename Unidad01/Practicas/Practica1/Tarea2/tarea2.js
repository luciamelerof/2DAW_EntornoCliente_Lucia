// Array

class Cuenta {
    constructor(titular, numero, saldo, interes) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = saldo;
        this.interes = interes;
    }
}

let banco = [];

var cuenta1 = new Cuenta("Juan", "000", 1000.0, 0.01);
var cuenta2 = new Cuenta("Alvaro", "001", 4000.0, 0.02);
var cuenta3 = new Cuenta("Maria", "002", 10000.0, 0.01);
var cuenta4 = new Cuenta("Luisa", "003", 8000.0, 0.02);

banco.push(cuenta1, cuenta2, cuenta3, cuenta4);

var ordenado = [...banco].sort((a, b) => b.saldo - a.saldo);

for (const i in ordenado) {
    console.log(`Titular: ${ordenado[i].titular}`);
    console.log(`Numero: ${ordenado[2][i]}`);
    console.log(`Saldo: ${ordenado[3][i]}`);
    console.log(`Interés: ${ordenado[4][i]}`);
}