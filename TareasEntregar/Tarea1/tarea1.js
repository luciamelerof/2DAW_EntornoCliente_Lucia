
//Ejemplo Cuenta corriente

//Objeto Cuenta Corriente
var cuentaCorriente = new Cuenta2("Pepillo el de los Palotes", "111-11", 1000.00, 0.01);

//Métodos
//Contructores
//Constructor por defecto
function Cuenta1() {
    this.nombre = "";
    this.numero = "";
    this.saldo = 0.0;
    this.interes = 0.0;
}

//Constructor con parámetros
function Cuenta2(nombre, numCuenta, saldo, interes) {
    this.nombre = nombre;
    this.numero = numCuenta;
    this.saldo = saldo;
    this.interes = interes;
}

//Constructor copia
function Cuenta3(c) {
    this.nombre = c.nombre;
    this.numero = c.numero;
    this.saldo = c.saldo;
    this.interes = c.interes;
}
//geters
cuentaCorriente.getNombre = function () {
    return this.nombre;
}
cuentaCorriente.getNumero = function () {
    return this.numero;
}
cuentaCorriente.getSaldo = function () {
    return this.saldo;
}
cuentaCorriente.getInteres = function () {
    return this.interes;
}
//setters
cuentaCorriente.setNombre = function (nombre) {
    this.nombre = nombre;
}
cuentaCorriente.setNumero = function (numero) {
    this.numero = numero;
}
cuentaCorriente.setSaldo = function (saldo) {
    this.saldo = saldo;
}
cuentaCorriente.setInteres = function (interes) {
    this.interes = interes;
}

// Ingreso
cuentaCorriente.ingreso = function (cantidad) {
    if (cantidad <= 0) {
        console.log(`Debes ingresar al menos 0.01€. Cantidad que se ha intentado: ${this.cantidad}, saldo: ${cuentaCorriente.saldo}`);
        return false;
    }
    else {
        this.saldo += cantidad;
        return true;
    }
}

// Reintrego 

cuentaCorriente.reintegro = function (cantidad) {
    if (cantidad > this.saldo || cantidad <= 0) {
        console.log(`No puedes sacar ${cantidad}€, ya que tienes ${this.saldo}.`);
        return false;
    } else {
        this.saldo -= cantidad;
        return true;
    }
}
//Ejemplos de uso
console.log(cuentaCorriente.getNombre());

let cantidadIngreso = 1000;
let resultadoIngreso = cuentaCorriente.ingreso(cantidadIngreso);


if (!resultadoIngreso) {
    console.log(`No se pudo ingresar, ya que la cantidad es negativa o 0: ${cantidadIngreso}€.`);
} else {
    console.log(`Ingresado correctamente. Nuevo saldo: ${cuentaCorriente.saldo}€.`);
}

let cantidadReintegro = 100;
let resultadoIntegro = cuentaCorriente.reintegro(cantidadReintegro);

console.log(resultadoIntegro);

if (!resultadoReintegro) {
    console.log(`No se pudo sacar. Saldo: ${cuentaCorriente.getSaldo()}€, cantidad solicitada: ${cantidadReintegro}€.`);
} else {
    console.log(`Sacado correctamente. Nuevo saldo: ${cuentaCorriente.getSaldo()}€.`);
}