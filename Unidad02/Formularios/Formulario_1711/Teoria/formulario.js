const form = document.getElementById('myForm');
const cajaBotones = document.getElementById('cajaBotones');

console.log(form.action);
console.log(form.method);
console.log(form.elements);

// 17/11/2026 Añadir botones de radio
form.elements['addSexo'].addEventListener('click', () => {
    const cNuevo = form.elements['nuevoSexo'].value.trim();   // se lee al hacer click
    if (cNuevo === '') return;

    cajaBotones.insertAdjacentHTML('beforeend',
        `<label><input type="radio" name="sexo" value="${cNuevo}"> ${cNuevo}</label>`);

    form.elements['nuevoSexo'].value = '';   // vacía el campo
});

// Restricción: que en checkbox esté marcada al menos una casilla
// Si el checkbox esta seleccionado: devuelve su valor; si no hay ninguno seleccionado: no es "", sino que no existe.

const aficiones = form.elements['aficiones'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Validar
    const marcadas = [];
    for (const af of aficiones) {
        if (af.checked) marcadas.push((af.value).toUpperCase());
    }
    if (marcadas.length === 0) {
        alert('Selecciona al menos una opción.');
        return;   // cortamos aquí: no saluda
    }

    // 2. Si todo está bien
    const nombre = form.elements['nombre'].value.trim();
    alert('Hola, ' + (nombre || 'anonymous'));

    const sexo = form.elements['sexo'].value;
    const textos = { H: 'HOMBRE', M: 'MUJER' };
    const sexoT = textos[sexo] || sexo.toUpperCase();
    alert(sexoT ? 'TU SEXO ES ' + sexoT : 'No has marcado ninguna opción');

    alert('Aficiones: ' + marcadas.join(', '));
});