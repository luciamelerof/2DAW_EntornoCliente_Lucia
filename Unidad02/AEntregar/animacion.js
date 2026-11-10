let baraja = new Baraja("francesa");
let cartaActual = null;

let mazo = document.getElementById("mazo");
let numCartas = document.getElementById("numCartas");
let mensaje = document.getElementById("mensaje");
let cartaRobada = document.getElementById("cartaRobada");
let nombreCarta = document.getElementById("nombreCarta");

let btnBarajar = document.getElementById("barajar");
let btnCortar = document.getElementById("cortar");
let btnRobar = document.getElementById("robar");
let btnReiniciar = document.getElementById("reiniciar");

// Al pasar el ratón por el mazo, la carta de arriba sube un poco
mazo.addEventListener("mouseover", () => {
    mazo.style.top = "-10px";
});

mazo.addEventListener("mouseout", () => {
    mazo.style.top = "0px";
});

// Robar: la carta aparece a la derecha boca abajo
function robar() {
    cartaActual = baraja.robar();

    if (cartaActual === null) {
        mensaje.textContent = "No quedan cartas en el mazo.";
        return;
    }

    cartaRobada.src = "reverso.png";
    cartaRobada.style.visibility = "visible";
    nombreCarta.textContent = "Haz clic en la carta para darle la vuelta.";
    mensaje.textContent = "Has robado una carta.";
    numCartas.textContent = baraja.numCartas();

    if (baraja.numCartas() === 0) {
        mazo.style.visibility = "hidden";
    }
}

btnRobar.addEventListener("click", robar);
mazo.addEventListener("click", robar);   // también se roba pulsando el mazo

// Al pulsar la carta robada, se le da la vuelta
cartaRobada.addEventListener("click", () => {
    if (cartaActual !== null) {
        cartaRobada.src = cartaActual.imagen;
        nombreCarta.textContent = `Es ${cartaActual.toString()}.`;
    }
});

// Barajar y cortar: se muestra el nuevo orden por consola
btnBarajar.addEventListener("click", () => {
    baraja.barajar();
    baraja.mostrarBaraja();
    mensaje.textContent = "Baraja barajada.";
});

btnCortar.addEventListener("click", () => {
    let pos = baraja.cortar();
    baraja.mostrarBaraja();
    mensaje.textContent = `Baraja cortada por la posición ${pos}.`;
});

btnReiniciar.addEventListener("click", () => {
    baraja = new Baraja("francesa");
    cartaActual = null;
    numCartas.textContent = baraja.numCartas();
    mazo.style.visibility = "visible";
    cartaRobada.style.visibility = "hidden";
    nombreCarta.textContent = "";
    mensaje.textContent = "Baraja creada y ordenada.";
});