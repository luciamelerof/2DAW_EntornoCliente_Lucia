const precios = [12, 5, 30, 8];

precios.forEach((precio, i) => {
    console.log(`Producto ${i}: ${precio}€`);
});

// Sumar con forEach

let total = 0;
precios.forEach((precio) => total += precio);

console.log(`Total: ${total} €.`);

// Lógica map
// map transforma cada elemento y devuelve un array nuevo con los resultados.
const conIVA = precios.map(precio => precio * 1.21);
console.log(conIVA);
console.log(precios); // el original no cambia

const etiquetas = precios.map(precio => `${precio.toFixed(2)}€`);
console.log(etiquetas);

// Filter
// filter devuelve un array nuevo solo con los elementos que cumplen la condición.

const productos = [
    { nombre: "Camiseta", precio: 15, stock: 3 },
    { nombre: "Gorra", precio: 10, stock: 0 },
    { nombre: "Sudadera", precio: 40, stock: 7 },
    { nombre: "Calcetines", precio: 5, stock: 0 }
];

const disponibles = productos.filter(producto => producto.stock > 0);
console.log(disponibles);


const baratos = productos.filter(producto => producto.precio < 20);
const nombresBaratos = baratos.map(barato => barato.nombre);

console.log(nombresBaratos);

// Reduce
// Reduce un array entero a un solo valor: una suma, un máximo, un objeto…

const t = precios.reduce((acumulado, precio) => acumulado + precio, 0);
console.log(t);

// Ej 1
const valorInventario = productos.reduce((total, producto) => total + producto.precio * producto.stock, 0);
console.log(valorInventario);

// Ej 2
const masCaro = productos.reduce((mejor, p) => p.precio > mejor.precio ? p : mejor);
console.log(masCaro);

// Ej 3
const menorStock = productos.reduce((menor, p) => p.stock < menor.stock ? p : menor);
console.log(menorStock);

// Ej 4
// Nuevo: claves dinámicas. Con obj.clave el nombre de la clave es fijo. 
const votos = ["rojo", "azul", "rojo", "verde", "rojo", "azul"];

const recuento = votos.reduce((conteo, color) => {
    conteo[color] = (conteo[color] ?? 0) + 1;
    return conteo;
}, {});

console.log(recuento); // { rojo: 3, azul: 2, verde: 1 }

// Ej 5
const banana = "banana";
const arrayBanana = banana.split("");

const recuentoBanana = arrayBanana.reduce((conteo, letra) => {
    conteo[letra] = (conteo[letra] ?? 0) + 1;
    return conteo;
}, {});

console.log(recuentoBanana);

// Ejemplo final bloque: filter, map y reduce
// Mostrar sólo el total de Ana
const pedidos = [
    { cliente: "Ana", total: 45, pagado: true },
    { cliente: "Luis", total: 20, pagado: false },
    { cliente: "Marta", total: 80, pagado: true },
    { cliente: "Ana", total: 15, pagado: true }
];

// Primero, hago un array en el que solo salga lo que debe Ana
const arrayAna = pedidos.filter(pedido => pedido.cliente === "Ana" && pedido.pagado === true);

// Segundo, dejo solo el precio de lo que debe Ana
const pagadoAna = arrayAna.map(pedido => pedido.total);

// Tercero, hago la suma de los totales
const totalPagadoAna = pagadoAna.reduce((total, pago) => total + pago, 0);

console.log(`Total pago Ana: ${totalPagadoAna}.`);

