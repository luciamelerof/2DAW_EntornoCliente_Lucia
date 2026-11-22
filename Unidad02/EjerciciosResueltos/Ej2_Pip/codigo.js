// EJ2 - Pip
// Conceptos: cambiar src/alt, click, mouseover, mousemove (clientX/clientY),
//            keydown con e.key, mover con style.left/top + parseInt, límites

const pip = document.getElementById("pip");
const bParado = document.getElementById("bParado");
const bCaminando = document.getElementById("bCaminando");
const coordenadas = document.getElementById("coordenadas");
const mensaje = document.getElementById("mensaje");
const ventana = document.querySelector("html");   // toda la página

// --- 1. Cambiar la imagen con los botones ---
bParado.addEventListener("click", () => {
    pip.src = "../../EjerciciosAnimacion_Relacion/pip_parado.png";
    pip.alt = "Pip parado";
});

bCaminando.addEventListener("click", () => {
    pip.src = "../../EjerciciosAnimacion_Relacion/pip_caminando.gif";
    pip.alt = "Pip caminando";
});

// --- 2. Mensaje al pasar el ratón por encima de Pip ---
pip.addEventListener("mouseover", () => {
    mensaje.innerHTML = "¡Hola! Soy Pip";
});

// --- 3. Coordenadas del ratón en toda la página ---
ventana.addEventListener("mousemove", (e) => {
    coordenadas.innerHTML = `(${e.clientX}, ${e.clientY})`;
});

// --- 4. Mover con las flechas sin salir de 0..300 px ---
const MIN = 0;
const MAX = 300;

ventana.addEventListener("keydown", (e) => {
    // style.left es un string tipo "20px" -> parseInt lo deja en 20
    let left = parseInt(pip.style.left);
    let top = parseInt(pip.style.top);

    if (e.key === "ArrowRight") {
        left = left + 10;
    } else if (e.key === "ArrowLeft") {
        left = left - 10;
    } else if (e.key === "ArrowUp") {
        top = top - 10;
    } else if (e.key === "ArrowDown") {
        top = top + 10;
    }

    // Límites: si se pasa, lo dejo en el borde
    if (left < MIN) left = MIN;
    if (left > MAX) left = MAX;
    if (top < MIN) top = MIN;
    if (top > MAX) top = MAX;

    // Vuelvo a poner la unidad "px"
    pip.style.left = left + "px";
    pip.style.top = top + "px";
});
