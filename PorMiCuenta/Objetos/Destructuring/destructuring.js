// Destructuring
// Sirve para sacar valores de un array u objeto y meterlos en variables en una sola línea.

// Con objetos (por nombre de propiedad):
const alumno = { nombre: "Lucía", curso: "2º DAW", edad: 20 };

const { nombre, curso } = alumno;
console.log(nombre, curso); // "Lucía" "2º DAW"


// Con arrays (por posición):
const par = ["mates", 7];

const [asignatura, nota] = par;
console.log(asignatura, nota); // "mates" 7

// SE USA DE VERDAD: Object.entries (par [clave, valor])
const notas = { mates: 7, lengua: 9, ingles: 5 };

Object.entries(notas).forEach(([asig, nota]) => {
    console.log(`${asig}: ${nota}`);
});

// Object entries + filter

const notables = Object.entries(notas).filter(([asig, nota]) => nota > 6);
console.log(notables);

// A partir de notas, crea notasSubidas con un punto más en cada nota, sin pasar de 10.
const notas2 = { mates: 8, lengua: 10, ingles: 6 };

const notasSubidas = Object.fromEntries(
    Object.entries(notas).map(([asig, nota]) => [asig, Math.min(nota + 1, 10)]));

// Paso a paso

// PASO 1: objeto → array de pares
const pares = Object.entries(notas);
console.log(pares);
// [["mates", 7], ["lengua", 9], ["ingles", 5]]

// PASO 2: transformar cada par en un par nuevo
const paresNuevos = pares.map(([asig, nota]) => [asig, nota + 1]);
console.log(paresNuevos);
// [["mates", 8], ["lengua", 10], ["ingles", 6]]

// PASO 3: array de pares → objeto
const resultado = Object.fromEntries(paresNuevos);
console.log(resultado);
// { mates: 8, lengua: 10, ingles: 6 }

// Ejemplo refuerzo 1: subir precio * 2
const precios = { pan: 1, leche: 2, huevos: 3 };

// Se reutiliza paresPrecios
const paresPrecios = Object.entries(precios); // ya son un array de pares

const preciosParesSubidos = paresPrecios.map(([nombre, precio]) => [nombre, precio * 2]);

const preciosResult = Object.fromEntries(preciosParesSubidos);

console.log(preciosResult); //  { pan: 2, leche: 4, huevos: 6 }

// Ejercicio 2 refuerzo: Ahora cambian las claves A MAYUSC

const preciosMayusc = paresPrecios.map(([nombre, precio]) => [nombre.toUpperCase(), precio]);

const preciosMayuscResult = Object.fromEntries(preciosMayusc);

// Ejercicio 3 refuerzo: filtrar productos que valgan 2 euros o mas

const preciosFiltrados = paresPrecios.filter(([nombre, precio]) => precio >= 2);

const preciosFiltradosObjectResult = Object.fromEntries(preciosFiltrados);

// Ejercicio 4 refuerzo: Filter + map juntos
const stock = { manzanas: 0, peras: 12, uvas: 5, kiwis: 0 };
// Resultado: solo las frutas con stock, y el stock en formato texto
// { peras: "12 uds", uvas: "5 uds" }

const stockDisponible = Object.entries(stock).filter(([nombre, uds]) => uds > 0).map(([nombre, uds]) => [nombre, `${uds} uds`]);

const objStock = Object.fromEntries(stockDisponible);