const form = document.getElementById('form');
const btnDatos = form.elements['mostrarDatos'];

btnDatos.addEventListener('click', (e) => {
    e.preventDefault();
    let ok = true;

    const nombre = form.elements['nombre'].value;
    const errNombre = document.getElementById('err-nombre');
    errNombre.textContent = '';

    if (nombre.trim() === '' || nombre.trim().length <= 3) {
        errNombre.textContent = 'Nombre vacío o longitud < 3';
        ok = false;
    }

    const apellidos = form.elements['apellidos'].value;
    const errApellidos = document.getElementById('err-apellidos');
    errApellidos.textContent = '';

    if (apellidos.trim() === '' || apellidos.trim().length <= 3) {
        errApellidos.textContent = 'Apellidos vacíos o longitud < 3';
        ok = false;
    }

    const email = form.elements['email'].value;
    const errEmail = document.getElementById('err-email');
    errEmail.textContent = '';

    if (email.trim() === '') {
        errEmail.textContent = 'Email vacío';
        ok = false;
    }

    const edad = form.elements['edad'].value;
    const errEdad = document.getElementById('err-edad');

    if (Number.isInteger(edad) || Number(edad) <= 0) {
        errEdad.textContent = 'Edad vacía o <= 0';
        ok = false;
    }

    const datos = document.getElementById('datos');

    if (ok) {
        datos.innerHTML += "DATOS" + "<br>";
        datos.innerHTML += nombre + "<br>";
        datos.innerHTML += apellidos + "<br>";
        datos.innerHTML += email + "<br>";
        datos.innerHTML += edad + "<br>";
    } else {
        datos.innerHTML = 'Non hay datos disponibles por posibles errores';
    }

});