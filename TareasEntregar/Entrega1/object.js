// Primera actividad: Object Date()

// Función auxiliar: crea Date a partir de los 6 valores (mes 1-12)
function crearDate(anio, mes, dia, hora, minuto, segundo) {
    var fecha = new Date(0); // Crea un objeto Date que vale 0 milisegundos desde el 1 de enero de 1970 a las 00:00:00 UTC

    fecha.setFullYear(anio, mes - 1, dia); // cambia año, mes y día
    fecha.setHours(hora, minuto, segundo, 0); // cambia hora, minuto, segundo y milisegundos

    return fecha;
}

// Función auxiliar que rellena con ceros a la izquierda
function dosDigitos(n) {
    return n < 10 ? "0" + n : "" + n;
}

// Constructor
function Tiempo(anio, mes, dia, hora, minuto, segundo) {
    var fecha;

    if (anio === 0 && mes === 0 && dia === 0 && hora === 0
        && minuto === 0 && segundo === 0) {
        fecha = new Date(); // fecha actual
    } else {
        fecha = crearDate(anio, mes, dia, hora, minuto, segundo);
    }

    this.cargarDate(fecha);
}

// Métodos internos
Tiempo.prototype.cargarDate = function (fecha) {
    this.anio = fecha.getFullYear();
    this.mes = fecha.getMonth() + 1;
    this.dia = fecha.getDate();
    this.hora = fecha.getHours();
    this.minuto = fecha.getMinutes();
    this.segundo = fecha.getSeconds();
}

Tiempo.prototype.toDate = function () {
    return crearDate(this.anio, this.mes, this.dia, this.hora, this.minuto, this.segundo);
};

// Ajusta valores fuera de rango, como minuto 75 = 1 hora y 15 mins
Tiempo.prototype.normalizar = function () {
    this.cargarDate(this.toDate());
};

// Getters
Tiempo.prototype.getAnio = function () { return this.anio; };
Tiempo.prototype.getMes = function () { return this.mes; };
Tiempo.prototype.getDia = function () { return this.dia; };
Tiempo.prototype.getHora = function () { return this.hora; };
Tiempo.prototype.getMinuto = function () { return this.minuto; };
Tiempo.prototype.getSegundo = function () { return this.segundo; };

Tiempo.prototype.getFechaCompleta = function () {
    return dosDigitos(this.dia) + "/" + dosDigitos(this.mes) + "/" + this.anio;
};

Tiempo.prototype.getHoraCompleta = function () {
    return dosDigitos(this.hora) + ":" + dosDigitos(this.minuto) + ":" + dosDigitos(this.segundo);
};

// Setters
Tiempo.prototype.setAnio = function (anio) { this.anio = anio; this.normalizar(); };
Tiempo.prototype.setMes = function (mes) { this.mes = mes; this.normalizar(); };
Tiempo.prototype.setDia = function (dia) { this.dia = dia; this.normalizar(); };
Tiempo.prototype.setHora = function (hora) { this.hora = hora; this.normalizar(); };
Tiempo.prototype.setMinuto = function (minuto) { this.minuto = minuto; this.normalizar(); };
Tiempo.prototype.setSegundo = function (segundo) { this.segundo = segundo; this.normalizar(); };

// Si es año bisiesto
Tiempo.prototype.esBisiesto = function () {
    var a = this.anio;
    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
};

// Comparaciones
Tiempo.prototype.esMayor = function (otroTiempo) {
    return this.toDate().getTime() > otroTiempo.toDate().getTime();
};

Tiempo.prototype.esMenor = function (otroTiempo) {
    return this.toDate().getTime() < otroTiempo.toDate().getTime();
};

Tiempo.prototype.esIgual = function (otroTiempo) {
    return this.toDate().getTime() === otroTiempo.toDate().getTime();
};

// Sumar horas, minutos y segundos de otroTiempo 
Tiempo.prototype.sumaHora = function (otroTiempo) {
    var fecha = crearDate(
        this.anio, this.mes, this.dia,
        this.hora + otroTiempo.getHora(),
        this.minuto + otroTiempo.getMinuto(),
        this.segundo + otroTiempo.getSegundo()
    );
    this.cargarDate(fecha);
};

// Ejemplos de uso

console.log("CONSTRUCTOR");
var tiempo1 = new Tiempo(2024, 2, 28, 22, 45, 30);
var tiempo2 = new Tiempo(2025, 12, 31, 23, 59, 59);
var tActual = new Tiempo(0, 0, 0, 0, 0, 0);

console.log("tiempo1: ", tiempo1.getFechaCompleta(), tiempo1.getHoraCompleta());
console.log("tiempo2: ", tiempo2.getFechaCompleta(), tiempo2.getHoraCompleta());
console.log("tActual: ", tActual.getFechaCompleta(), tActual.getHoraCompleta());

console.log("GETTERS");
console.log("Año: ", tiempo1.getAnio());
console.log("Mes: ", tiempo1.getMes());
console.log("Día: ", tiempo1.getDia());
console.log("Hora: ", tiempo1.getHora());
console.log("Minuto: ", tiempo1.getMinuto());
console.log("Segundo: ", tiempo1.getSegundo());
console.log("Fecha completa: ", tiempo1.getFechaCompleta());
console.log("Hora completa: ", tiempo1.getHoraCompleta());

console.log("SETTERS");
var tiempo3 = new Tiempo(2025, 5, 10, 8, 0, 0);
console.log("Antes:", tiempo3.getFechaCompleta(), tiempo3.getHoraCompleta());
tiempo3.setAnio(2026);
tiempo3.setMes(7);
tiempo3.setDia(15);
tiempo3.setHora(14);
tiempo3.setMinuto(30);
tiempo3.setSegundo(5);
console.log("Después", tiempo3.getFechaCompleta(), tiempo3.getHoraCompleta());

console.log("¿ES BISIESTO?");
console.log(tiempo1.getAnio(), " es bisiesto: ", tiempo1.esBisiesto()); // true
console.log(tiempo2.getAnio(), " es bisiesto: ", tiempo2.esBisiesto()); // false
console.log(1900, " es bisiesto: ", new Tiempo(1900, 1, 1, 0, 0, 1).esBisiesto()); // false
console.log(2000, " es bisiesto: ", new Tiempo(2000, 1, 1, 0, 0, 1).esBisiesto()); // true

console.log("COMPARACIONES");
var tiempo4 = new Tiempo(2024, 2, 28, 22, 45, 30); // igual que tiempo1
console.log("tiempo1 esMayor tiempo2:", tiempo1.esMayor(tiempo2)); // false
console.log("tiempo1 esMenor tiempo2:", tiempo1.esMenor(tiempo2)); // true
console.log("tiempo1 esIgual tiempo4:", tiempo1.esIgual(tiempo4)); // true
console.log("tiempo1 esIgual tiempo2:", tiempo1.esIgual(tiempo2)); // false

console.log("SUMA HORA");
var duracion = new Tiempo(2000, 1, 1, 1, 20, 45);
console.log("tiempo2 antes:", tiempo2.getFechaCompleta(), tiempo2.getHoraCompleta());
console.log("Sumando:", duracion.getHoraCompleta());
tiempo2.sumaHora(duracion);
console.log("tiempo2 después:", tiempo2.getFechaCompleta(), tiempo2.getHoraCompleta()); 