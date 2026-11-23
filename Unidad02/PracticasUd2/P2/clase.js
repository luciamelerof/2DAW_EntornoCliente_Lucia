class Socio {
    constructor(dni, nombre, apellidos, email, telefono, fechaNac, tipo, generos) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.telefono = telefono;
        this.fechaNac = fechaNac;
        this.tipo = tipo;
        this.generos = generos;
    }

    toString() {
        return `<tr><td>${this.dni}</td><td>${this.nombre}</td><td>${this.apellidos}</td><td>${this.email}</td><td>${this.telefono}</td>
        <td>${this.fechaNac}</td><td>${this.tipo}</td><td>${this.generos.join(", ")}</td></tr>`;
    }
}

class Biblioteca {
    constructor() {
        this.socios = [];
    }

    agregarSocio(socio) {
        this.socios.push(socio);
    }
}