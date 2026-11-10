const nombres = ["Ana", "Luis", "Marta"];

// forEach

nombres.forEach(n => console.log(`Hola, ${n}`));

const productos = [
    { nombre: "Gorra", precio: 10 },
    { nombre: "Sudadera", precio: 40 }
];

productos.forEach(p => console.log(`${p.nombre} cuesta ${p.precio}€.`));

// map

const preciosConIVA = productos.map(p => p.precio * 1.21);

console.log(preciosConIVA);

// filter

const productos2 = [
    { nombre: "Gorra", precio: 10, stock: 0 },
    { nombre: "Sudadera", precio: 40, stock: 5 },
    { nombre: "Camiseta", precio: 15, stock: 3 }
];

const baratos = productos2.filter(p => p.precio < 20);

console.log(baratos);

const nombresBaratos = baratos.map(b => b.nombre);

console.log(nombresBaratos);

const agotado = productos2.find(p => p.stock === 0);

const camiseta = productos2.find(p => p.nombre === "Camiseta").map(p => p.stock);

console.log(`Hay algún producto agotado: ${agotado}.`);
console.log(`Stock de camiseta: ${camiseta}.`);

