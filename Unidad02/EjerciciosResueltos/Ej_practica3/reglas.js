const form = document.getElementById('form');

const pass = form.elements['contrasena'];
const pass2 = form.elements['repetirContrasena'];
const errPass = document.getElementById('err-contrasena');
const errPass2 = document.getElementById('err-repetirContrasena');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const errNombre = document.getElementById('err-nombre');
    errNombre.textContent = '';

    const nombre = form.elements['nombre'].value;

    if (!comprobarNombre(nombre)) {
        errNombre.textContent = 'Nombre inválido (- de 4 caracteres)';
        ok = false;
    }

    const errEmail = document.getElementById('err-email');
    errEmail.textContent = '';

    const email = form.elements['email'].value;

    if (!comprobarEmail(email)) {
        errEmail.textContent = 'Formato de email inválido';
        ok = false;
    }

    const errCodPostal = document.getElementById('err-codigopostal');
    errCodPostal.textContent = '';

    const codPostal = form.elements['codigoPostal'].value;

    if (!comprobarCodigoPostal(codPostal)) {
        errCodPostal.textContent = 'Código postal inválido';
        ok = false;
    }




    if (ok) form.submit();
});

pass.addEventListener('input', () => {
    comprobarContrasena();
    comprobarContrasena2();
});

pass2.addEventListener('input', comprobarContrasena2);

function comprobarNombre(valor) {
    return valor.trim() > 3;
}

function comprobarEmail(valor) {
    return /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(valor);
}

function comprobarCodigoPostal(valor) {
    return /^\d{5}$/.test(valor);
}

function comprobarContrasena() {
    if (pass.value === '') {
        errPass.textContent = '';
        return false;
    }

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass.value)) {
        errPass.textContent = 'Mínimo 8 caracteres, mayusc y numero';
        return false;
    }

    errPass.textContent = '';
    return true;
}

function comprobarContrasena2() {
    if (pass2.value === '') {
        errPass2.textContent = '';
        return false;
    }

    if (pass.value !== pass2.value) {
        errPass2.textContent = 'Las contraseñas no coinciden';
        return false;
    }

    errPass2.textContent = '';
    return true;
}

