// EJ4 - Formulario de empleado (con el HTML del profe)
// Diferencias con el que hiciste ayer:
//   - UN solo div #errores: los mensajes se acumulan en un array y se muestran juntos
//   - La fecha es <input type="date"> -> su value es "AAAA-MM-DD" (o "" si está vacía)
//   - El form no tiene id -> se coge con querySelector("form")

const form = document.querySelector("form");
const cajaErrores = document.getElementById("errores");

form.addEventListener("submit", (e) => {
    e.preventDefault();          // 1. retengo el envío
    cajaErrores.innerHTML = "";  // 2. limpio errores anteriores
    const errores = [];          // aquí voy guardando los mensajes

    // 3. Valido cada campo
    if (!compruebaDNI(form.elements["dni"].value)) {
        errores.push("El DNI es incorrecto");
    }
    if (!compruebaNombre(form.elements["nombre"].value)) {
        errores.push("El nombre debe tener más de 3 caracteres (sin contar blancos)");
    }
    if (!compruebaNombre(form.elements["apellidos"].value)) {
        errores.push("Los apellidos deben tener más de 3 caracteres (sin contar blancos)");
    }
    if (!compruebaEdad(form.elements["edad"].value)) {
        errores.push("La edad debe estar entre 18 y 65");
    }
    if (!compruebaFecha(form.elements["fechaNacimiento"].value)) {
        errores.push("La fecha de nacimiento no es correcta");
    }
    if (form.elements["tipoEmpleado"].value === "") {
        errores.push("Selecciona un tipo de empleado");
    }
    if (!algunoMarcado(form.elements["departamentos"])) {
        errores.push("Selecciona al menos un departamento");
    }

    // 4. Si hay errores los muestro; si no, envío
    if (errores.length > 0) {
        cajaErrores.innerHTML = errores.join("<br>");
    } else {
        form.submit();
    }
});

// ---------- FUNCIONES DE VALIDACIÓN ----------

function compruebaDNI(valor) {
    const dni = valor.trim().toUpperCase();
    if (!/^\d{8}[A-Z]$/.test(dni)) return false;   // 8 números + 1 letra

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = Number(dni.slice(0, 8));
    return dni[8] === letras[numero % 23];
}

function compruebaNombre(valor) {
    return valor.replaceAll(" ", "").length > 3;
}

function compruebaEdad(valor) {
    const edad = Number(valor);
    return Number.isInteger(edad) && edad >= 18 && edad <= 65;
}

// type="date" -> "AAAA-MM-DD". OJO: el orden es AÑO, MES, DÍA y el separador es "-"
function compruebaFecha(valor) {
    if (valor === "") return false;

    const partes = valor.split("-");
    const a = Number(partes[0]);
    const m = Number(partes[1]) - 1;   // meses en JS: 0..11
    const d = Number(partes[2]);

    const f = new Date(a, m, d);
    return f.getFullYear() === a && f.getMonth() === m && f.getDate() === d;
}

// Sirve para checkbox (y radios): true si hay al menos uno marcado
function algunoMarcado(lista) {
    for (const c of lista) {
        if (c.checked) return true;
    }
    return false;
}
