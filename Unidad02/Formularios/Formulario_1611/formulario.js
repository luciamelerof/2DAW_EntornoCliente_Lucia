const form = document.getElementById('myForm');

console.log(form.action);
console.log(form.method);
console.log(form.elements);

const boton = form.elements[3];

boton.addEventListener('click', (e) => {
    e.preventDefault();

    const nombre = form.elements[0].value;

    if (nombre !== '') {
        alert('Hola, ' + nombre);
    } else {
        alert('Hola, anonymous');
    }

    const sexo = form.elements['sexo'].value;

    const sexoT = sexo === "M" ? "MUJER" : sexo === "H" ? "HOMBRE" : '';

    if (sexoT) {
        alert('TU SEXO ES ' + sexoT);
    } else {
        alert('No has marcado ninguna opción');
    }
});