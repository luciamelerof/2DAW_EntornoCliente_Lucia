// EJ1 - Espejo de texto
// Conceptos: getElementById, value, innerHTML, evento keyup

// 1. Capturo los elementos
const nombre = document.getElementById("nombre");
const vista = document.getElementById("vista");
const letras = document.getElementById("letras");

// 2. keyup: salta al SOLTAR la tecla, cuando la letra ya está en el input.
//    (con keydown el texto iría siempre una letra por detrás)
nombre.addEventListener("keyup", () => {
    const texto = nombre.value.trim();   // value = lo escrito; trim quita espacios de los lados

    if (texto === "") {
        vista.innerHTML = "Escribe tu nombre";
    } else {
        vista.innerHTML = "Jugador: " + texto;
    }

    letras.innerHTML = "Llevas " + texto.length + " letras";
});
