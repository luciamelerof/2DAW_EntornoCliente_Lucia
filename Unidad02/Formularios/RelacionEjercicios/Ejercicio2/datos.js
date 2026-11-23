const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let ok = true;

    const errores = document.getElementById('errores');
    errores.textContent = '';

    const nombre = form.elements['nombre'].value;
    const email = form.elements['email'].value;
    const edad = form.elements['edad'].value;
    const contrasena = form.elements['contrasena'].value;

    if (!compruebaNombre(nombre)) {
        errores.innerHTML += "- Nombre incorrecto <br>";
        ok = false;
    }

    if (!compruebaEmail(email)) {
        errores.innerHTML += "- Email incorrecto <br>";
        ok = false;
    }

    if (!compruebaEdad(edad)) {
        errores.innerHTML += "- Edad incorrecta <br>";
        ok = false;
    }

    if (!compruebaContrasena(contrasena)) {
        errores.innerHTML += "- Contraseña inválida";
        ok = false;
    }

    if (ok) {
        errores.textContent = 'Registro realizado correctamente.';
        form.reset();
    } else {
        form.reset();
    }
});

function compruebaNombre(valor) {
    const nombre = valor.trim();

    return nombre !== '';
}

function compruebaEmail(valor) {
    const email = valor.trim();

    return email !== '';
}

function compruebaEdad(valor) {
    const edad = Number(valor);

    return Number.isInteger(edad) && edad >= 18 && edad <= 100;
}

function compruebaContrasena(valor) {
    return valor.length >= 8;
}