// Validación de formulario de empleados
// de una empresa con los siguientes elementos

// DNI
// NOMBRE
// APELLIDOS
// EDAD
// FECHA NACIMIENTO
// TIPO EMPLEADO: Directivo, encargado u operativo
// DEPARTAMENTO/S AL QUE PERTENECE

// REGLAS DE VALIDACION
// 1. DNI CORRECTO
// 2. ALGUN VALOR > 3 PARA NOMBRE Y APELLIDOS SIN CONTAR BLANCOS
// 3. EDAD ENTRE 18 Y 65
// 4. FECHA NAC CORRECTA SEGUN EL FORMATO DD/MM/AAAA
// 5. QUE SE HAYA MARCADO ALGUNA OPCION TANTO EN TIPO EMPLEADO COMO EN DEPARTAMENTO

// Recojo el formulario
let form = document.forms['formEmpleado'];
let empresa = new Empresa();

form.addEventListener('submit', (e) => {
    e.preventDefault(); // retiene el formulario y no se envía hasta que se valide
    let ok = true;

    const dni = form.elements['dni'].value;
    const nombre = form.elements['nombre'].value;
    const apellidos = form.elements['apellidos'].value;
    const edad = form.elements['edad'].value;
    const fechaNac = form.elements['fechaNac'].value;
    const tipo = form.elements['tipo'].value;

    // DNI

    const errDni = document.getElementById('err-dni');
    // Vaciar el error antes de validar
    errDni.textContent = '';

    // Compruebo cosas
    if (!compruebaDNI(dni)) {
        errDni.textContent = 'DNI inválido';
        ok = false;
    }

    // NOMBRE Y APELLIDOS
    const errNombre = document.getElementById('err-nombre');
    const errApellidos = document.getElementById('err-apellidos');

    errNombre.textContent = '';
    errApellidos.textContent = '';

    if (!compruebaNombre(nombre)) {
        errNombre.textContent = 'Nombre inválido';
        ok = false;
    }

    if (!compruebaNombre(apellidos)) {
        errApellidos.textContent = 'Apellido/s inválido/s';
        ok = false;
    }

    const errEdad = document.getElementById('err-edad');

    errEdad.textContent = '';

    if (!compruebaEdad(edad)) {
        errEdad.textContent = 'Edad inválida';
        ok = false;
    }

    const errFecha = document.getElementById('err-fechaNac');

    errFecha.textContent = '';

    if (!compruebaFecha(fechaNac)) {
        errFecha.textContent = 'Fecha inválida';
        ok = false;
    }

    const errTipo = document.getElementById('err-tipo');

    errTipo.textContent = '';

    if (tipo === '') {
        errTipo.textContent = 'Seleccione alguna opción';
        ok = false;
    }

    const errDep = document.getElementById('err-departamentos');

    errDep.textContent = '';

    const marcados = [];

    for (const dep of form.elements['departamentos']) {
        if (dep.checked) {
            marcados.push(dep.value);
        }
    }

    if (marcados.length === 0) {
        errDep.textContent = 'Seleccione al menos una opción';
        ok = false;
    }

    // Si todo va bien, que se envíe
    if (ok) {
        empresa.empleados.push(new Empleado(dni, nombre, apellidos, edad, fechaNac, tipo, marcados));
        let listaEmpleados = document.getElementById('listaEmpleados');

        listaEmpleados.innerHTML = '';

        for (const empleado of empresa.empleados) {
            listaEmpleados.innerHTML += `${empleado.toString()}`;
        }

        form.reset();
    }
});

function compruebaDNI(valor) {
    const dni = valor.trim().toUpperCase();

    if (!/^\d{8}[A-Z]$/.test(dni)) {
        return false;
    }

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = Number(dni.slice(0, 8));
    const letraCorrecta = letras[numero % 23];

    return dni[8] === letraCorrecta;
}

function compruebaNombre(valor) {
    const sinBlancos = valor.replaceAll(' ', '');

    return sinBlancos.length > 3;
}

function compruebaEdad(valor) {
    const edad = Number(valor);

    return Number.isInteger(edad) && edad >= 18 && edad <= 65;
}

function compruebaFecha(valor) {
    const fecha = valor.trim();

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fecha)) {
        return false;
    }

    // 1. Separar en día, mes y año (como números)
    const partes = fecha.split('/');
    const d = Number(partes[0]);
    const m = Number(partes[1]) - 1;
    const a = Number(partes[2]);

    // 2. Crear la fecha (en JS los meses van de 0 a 11)
    const f = new Date(a, m, d);

    // 3. Comprobar que no se ha "corregido"
    return f.getFullYear() === a
        && f.getMonth() === m
        && f.getDate() === d;
}