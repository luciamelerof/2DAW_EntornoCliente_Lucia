// Declarar variables
const age = 10;
let name = "Lucía";

console.log (`Hola, me llamo ${name} y tengo ${age}`);

// Funciones / arrow functions
function esMayorDeEdad(edad) {
    if (edad >= 18) return true;
    else return false;
}

    // Forma moderna 
    const esMayorDeEdad = (edad) => edad >= 18;

// Arrays y Objetos

    // Objeto coche
    const coche = {
        marca: "seat",
        modelo: "leon",
        velocidad: 50,
        acelerar (velocidadPlus) {
        this.velocidad += velocidadPlus;
    }
    }

// Métodos de arrays(filter, map, forEach)

    const precios = [10, 25, 50, 100];

    const preciosConIVA = precios.map(precio => precio * 1.21);

// Desestructuración (Destructuring) y Operador Spread (...)
    
    // Desestructuración
    const producto = { id: 1, precio: 100, categoria: "tech" };

    const {precio, categoria} = producto;

    // Spread
    const cliente = {
    id: 101,
    nombre: "Marcos",
    vip: true
    };

    const clienteActualizado = {
        ...cliente, vip:false
    }

// Desestructuración con Renombrado y Valores por Defecto

    // Renombrar
        const ajuste = {
            volumen: 80
        };

        const { volumen: volumenActual} = ajuste;


    // Valores por defecto

        const {volumen, brillo = 100} = ajuste;


// Asincronía (async / await) y Promesas-> SIN ASYNC NO HAY AWAIT
       const cargarUsuarios = async () => {
        try {
            const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
            const datosUsers = await respuesta.json();

            console.log(datosUsers);
        } catch(error) {
            console.error("ERROR: ", error);
        }
}

/*¿Qué pasa "por detrás"? 
Sin await: fetch() devuelve inmediatamente una Promesa en estado pendiente (pending).

Con await: Le dices a JavaScript: "Pausa la ejecución de ESTA función hasta que la promesa se resuelva (estado fulfilled), pero deja libre el hilo principal para que el navegador/usuario siga haciendo cosas".

El segundo await: respuesta.json() también devuelve una Promesa, porque procesar todo el texto que llega del servidor lleva un par de milisegundos.*/ 

