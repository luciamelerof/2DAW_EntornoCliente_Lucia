// Ejercicio 1
var datos = [
    {
        dni: "111212L",
        nombre: "Lolo",
        apellido: "Perez",
        telefono: "66212666",
        asignaturas: [{
            nombre: "Ingles",
            codigo: "5555"
        }]
    },
    {
        dni: "121212H",
        nombre: "Pepe",
        apellido: "López",
        telefono: "66666666",
        asignaturas: [{
            nombre: "JS",
            codigo: "1111"
        },
        {
            nombre: "Diseño",
            codigo: "3333"
        }]
    },
    {
        dni: "1111999W",
        nombre: "Juan",
        apellido: "Marín",
        telefono: "611166666",
        asignaturas: [{
            nombre: "PHP",
            codigo: "2222"
        },
        {
            nombre: "FOL",
            codigo: "4444"
        }]
    }
];

for (const i of datos) {
    for (const a of i.asignaturas) {
        console.log('Nombre:', i.nombre, ', apellido: ', i.apellido, ', telefono: ', i.telefono,
            ', asignatura con nombre: ', a.nombre, ', codigo: ', a.codigo);
    }
}

// Ejercicio 2: recorrer un bucle para encontrar una asignatura concreta
const codigoAsignatura = "2222";
let encontrado = false;

for (let i of datos) {
    for (let a of i.asignaturas) {
        if (a.codigo === codigoAsignatura) {
            console.log('Nombre:', i.nombre, ', apellido: ', i.apellido, ', telefono: ', i.telefono,
                ', asignatura con nombre: ', a.nombre, ', codigo: ', a.codigo);
            encontrado = true;
            break;
        }
    }
    if (encontrado) break;
}

if (!encontrado) {
    console.log("No se ha encontrado ninguna asignatura con este Código");
}

// Ejercicio 3: añadir asignaturas

var profe = {
    dni: "121212Q",
    nombre: "Juan Carlos",
    apellido: "Higuera",
    telefono: "62112666",
    asignaturas: [{
        nombre: "Hola",
        codigo: "6666"
    }]
};

datos.push(profe);

var dni = document.getElementById("dni");
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");

// Más abajo
var nombreDeAsignatura = document.getElementById("asigNombre");
var codigoDeAsignatura = document.getElementById("asigCodigo");
const boton = document.getElementById("boton");

const botonProfe = document.getElementById("botonProfe");
botonProfe.addEventListener("click", () => {
    let encontrado3 = false;

    for (let i of datos) {
        if (i.dni === dniProfesor.value) {
            console.log(`DATOS DEL PROFESOR: ${i.dni}, ${i.nombre}, ${i.apellido}, ${i.telefono}`);

            if (i.asignaturas.length == 0) {
                console.log(`No tiene asignaturas este profesor.`);
            } else {
                for (let j of i.asignaturas) {
                    console.log(`El profesor con dni ${i.dni} imparte la asignatura con nombre ${j.nombre}, codigo: ${j.codigo}`);
                }
            }

            encontrado3 = true;
        }
    }

    if (!encontrado3) console.log(`No se ha encontrado ningún profesor con DNI ${dniProfesor.value}`);
});