class Empleado {
    constructor(dni, nombre, apellidos, edad, fechaNac, tipo, departamentos) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.fechaNac = fechaNac;
        this.tipo = tipo;
        this.departamentos = departamentos;
    }

    toString() {
        return `<tr><td>${this.dni}</td><td>${this.nombre}</td><td>${this.apellidos}</td><td>${this.edad}</td><td>${this.fechaNac}</td><td>${this.tipo}</td><td>${this.departamentos.join(", ")}</td></tr>`;
    }
}

class Empresa {
    constructor() {
        this.empleados = [];
    }
}