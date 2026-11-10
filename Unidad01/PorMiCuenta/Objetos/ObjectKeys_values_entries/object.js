// Los arrays tienen map, filter, etc., pero los objetos no. 
// La solución es convertir el objeto en un array y entonces usar todo lo que ya sabes.

const notas = { mates: 7, lengua: 9, ingles: 5 };

console.log(Object.keys(notas));    // ["mates", "lengua", "ingles"]
console.log(Object.values(notas));  // [7, 9, 5]
console.log(Object.entries(notas)); // [["mates", 7], ["lengua", 9], ["ingles", 5]]

// Ej 1: Calcula la media de las notas con Object.values y reduce
const notasSolas = Object.values(notas);

const totalNotas = notasSolas.reduce((total, nota) => total + nota , 0);

const mediaNotas = totalNotas / notasSolas.length;

console.log(`Media de las notas: ${mediaNotas}`);

// Ej 2: Saca un array con las asignaturas aprobadas (nota ≥ 5), con Object.keys y filter.

const asigAprobadas = Object.keys(notas).filter(asig => notas[asig] >= 5);

console.log(asigAprobadas);

