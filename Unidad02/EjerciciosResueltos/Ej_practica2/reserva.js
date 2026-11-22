const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const errNombre = document.getElementById('err-nombre');
    errNombre.textContent = '';

    const nombre = form.elements['nombre'].value;

    if (!compruebaNombre(nombre)) {
        errNombre.textContent = 'El nombre debe tener más de 3 letras';
        ok = false;
    }

    const errTelefono = document.getElementById('err-telefono');
    errTelefono.textContent = '';

    const telefono = form.elements['telefono'].value;

    if (!compruebaTelefono(telefono)) {
        errTelefono.textContent = 'Teléfono no válido';
        ok = false;
    }

    const errNPersonas = document.getElementById('err-npersonas');
    errNPersonas.textContent = '';

    const nPersonas = form.elements['nPersonas'].value;

    if (!compruebaNPersonas(nPersonas)) {
        errNPersonas.textContent = 'Entre 1 y 10 personas';
        ok = false;
    }

    const errTurno = document.getElementById('err-turno');
    errTurno.textContent = '';

    const turno = form.elements['turno'].value;

    if (turno.trim() === "") {
        errTurno.textContent = 'Elige comida o cena';
        ok = false;
    }

    const errFecha = document.getElementById('err-fecha');
    errFecha.textContent = '';

    const fecha = form.elements['fecha'].value;

    if (!compruebaFecha(fecha)) {
        errFecha.textContent = 'Elige una fecha de hoy en adelante';
        ok = false;
    }

    if (ok) form.submit();
});

const btnAlergia = document.getElementById('anadirAlergia');

btnAlergia.addEventListener('click', () => {
    const errAlergia = document.getElementById('err-alergia');
    errAlergia.textContent = '';

    const inputAlergia = form.elements['nuevaAlergia'];
    const nuevaAlergia = inputAlergia.value.trim();

    if (nuevaAlergia === "") {
        errAlergia.textContent = 'Alergía vacía';
        return;
    }

    const cajaAlergia = document.getElementById('cajaAlergia');

    cajaAlergia.innerHTML += `<label><input type="checkbox" name="alergia" id=""${nuevaAlergia} value="${nuevaAlergia}">${nuevaAlergia}</label>`;

    inputAlergia.value = '';
});

function compruebaNombre(valor) {
    const nombre = valor.replaceAll(" ", "");

    return nombre.length > 3;
}

function compruebaTelefono(valor) {
    const telefono = valor.replaceAll(' ', '');

    return /^[679]\d{8}$/.test(telefono);
}

function compruebaNPersonas(valor) {
    if (valor.trim() === "") return false;

    const n = Number(valor);

    return Number.isInteger(n) && n >= 1 && n <= 10;
}

function compruebaFecha(valor) {
    if (valor.trim() === "") return false;

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const partes = valor.split('-');

    const a = Number(partes[0]);
    const m = Number(partes[1]) - 1;
    const d = Number(partes[2]);

    const fecha = new Date(a, m, d);

    return fecha >= hoy;
}

