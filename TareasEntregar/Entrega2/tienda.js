// Clase Producto
class Producto {
    constructor(unidades, producto) {
        this.unidades = unidades;
        this.producto = producto;
    }

    get getUnidades() {
        return this.unidades;
    }

    get getProducto() {
        return this.producto;
    }

    set setUnidades(unidades) {
        this.unidades = unidades;
    }

    set setProducto(producto) {
        this.producto = producto;
    }

    toString() {
        return `Producto: ${this.producto}, unidades: ${this.unidades}.`;
    }
}

// FUNCION PARA CREAR LA COOKIE
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

// FUNCION PARA LEER LA COOKIE
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function cargarCarrito() {
    let cookie = getCookie("carrito");
    if (cookie == "") {
        return [];
    }

    return JSON.parse(cookie).map(p => new Producto(p.unidades, p.producto));
}

function mostrarCarrito() {
    let datos = cargarCarrito();
    let total = 0;
    console.log("Carrito: ");

    datos.forEach(element => {
        console.log(element.toString());
        total += element.unidades;
    });
    
    console.log("Total de productos: ", total);
}

var producto = document.getElementById("producto");
var unidades = document.getElementById("unidades");
var btn_comprar = document.getElementById("btn-comprar");
var btn_carrito = document.getElementById("btn-carrito");
var datos = cargarCarrito();

// Función añadir producto
// Función añadir producto
var formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        datos.push(new Producto(Number(unidades.value), producto.value));
        setCookie("carrito", JSON.stringify(datos), 7);

        console.log("Añadido: ", unidades.value + ", " + producto.value);
        unidades.value = "";
        producto.value = "";
    });
}
// Función ver carrito
btn_carrito.addEventListener('click', function (event) {
    event.preventDefault();

    if (btn_comprar) {
        window.location.href = "./carrito.html";
    } else {
        mostrarCarrito();
    }
});

if (!btn_comprar) {
    mostrarCarrito();
}