class Persona {
    constructor(dni, nombre, aps) {
        this.dni = dni;
        this.nombre = nombre;
        this.aps = aps;
    }

    verNombreCompleto() {
        return `${this.dni} - ${this.nombre} - ${this.aps}`;
    }
}

class Alumno extends Persona {
    constructor(dni, nombre, aps, numAlumno) {
        super(dni, nombre, aps);
        this.numAlumno = numAlumno;
    }

    verNombreCompleto() {
        return `${(super.verNombreCompleto())}, su número es: ${this.numAlumno}.`;
    }
}

const p1 = new Persona("1111111A", "Lucía", "Melero");
console.log(p1.verNombreCompleto());

const a1 = new Alumno("1111111B", "JuanMa", "Aguilera", 1);
console.log(a1.verNombreCompleto());

