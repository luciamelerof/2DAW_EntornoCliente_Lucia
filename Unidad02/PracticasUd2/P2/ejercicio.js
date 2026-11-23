const form = document.forms('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    const errDni = document.getElementById('err-dni');
    errDni.textContent = '';

    const errNombre = document.getElementById('err-nombre');
    errNombre.textContent = '';

    const errApellidos = document.getElementById('err-apellidos');
    errApellidos.textContent = '';

    const errEmail = document.getElementById('err-email');
    errEmail.textContent = '';

    const errTelefono = document.getElementById('err-telefono');
    errTelefono.textContent = '';

    const errFechaNac = document.getElementById('err-fechaNac');
    errFechaNac.textContent = '';

    const errTipo = document.getElementById('err-tipo');
    errTipo.textContent = '';

    const errGeneros = document.getElementById('err-generos');
    errGeneros.textContent = '';
});

function compruebaDni(valor) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
}

function compruebaNombre(valor) {
    
}

function compruebaApellidos(valor) {
    
}

function compruebaEmail(valor) {
    
}

function compruebaTelefono(valor) {
    
}

function compruebaFechaNac(valor) {

}

function compruebaTipo(valor) {
    
}

function compruebaGeneros(valor) {
    
}