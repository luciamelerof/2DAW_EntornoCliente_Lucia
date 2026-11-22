// EJ3 - Radios dinámicos (como el Formularios1 del profe)
// Conceptos: form.elements, innerHTML +=, evento change, checked,
//            submit + preventDefault, recorrer checkbox

const form = document.getElementById("myForm");
const cajaBR = document.getElementById("cajaBR");
const nuevoSexo = document.getElementById("nuevoSexo");
const bAnadir = document.getElementById("bAnadir");
const resultado = document.getElementById("resultado");

// --- Evento change en los radios ---
// OJO (trampa de examen): innerHTML += BORRA y vuelve a crear todo el contenido
// del div, así que los radios antiguos pierden sus eventos.
// Por eso los eventos se asignan en una función y se vuelve a llamar
// cada vez que se añade un radio.
function asignarEventosSexo() {
    for (const radio of form.elements["sexo"]) {
        radio.addEventListener("change", () => {
            resultado.innerHTML = "Has elegido: " + radio.value;
        });
    }
}

asignarEventosSexo();   // al cargar la página

// --- Añadir un radio nuevo ---
bAnadir.addEventListener("click", () => {
    const valor = nuevoSexo.value.trim();

    if (valor === "") {
        resultado.innerHTML = "Escribe una opción antes de añadir";
        return;   // corta aquí
    }

    cajaBR.innerHTML += `<input type="radio" name="sexo" value="${valor}"> ${valor}`;
    nuevoSexo.value = "";      // vacío la caja
    asignarEventosSexo();      // vuelvo a poner los eventos
});

// --- Enviar ---
form.addEventListener("submit", (e) => {
    e.preventDefault();   // retengo el envío

    // Nombre (vacío -> anonymous)
    let nombre = form.elements["nombre"].value.trim();
    if (nombre === "") nombre = "anonymous";

    // Radio: .value del grupo = el marcado, o "" si no hay ninguno
    const sexo = form.elements["sexo"].value;

    // Checkbox: hay que recorrerlos y mirar .checked
    let aficiones = "";
    let contador = 0;
    for (const af of form.elements["aficiones"]) {
        if (af.checked) {
            aficiones += af.value + " ";
            contador++;
        }
    }

    if (contador === 0) {
        resultado.innerHTML = "Porfa, elige alguna afición";
        return;
    }

    resultado.innerHTML =
        "Hola, " + nombre + "<br>" +
        "Sexo: " + (sexo === "" ? "no indicado" : sexo) + "<br>" +
        "Aficiones: " + aficiones;

    form.submit();   // <- descomenta para enviarlo de verdad
});
