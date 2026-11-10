class Publicacion {
    constructor(titulo, año) {
        this.titulo = titulo;
        comprobarTitulo(this.titulo);
        this.año = año;
    }

    toString() {
        return `Título: ${this.titulo}, año: ${this.año}`
    }
}

class Libro extends Publicacion {
    constructor(titulo, año, autor, prestado = false) {
        super(titulo, año);
        this.autor = autor;
        this.prestado = prestado;
    }

    prestar() {
        comprobarPrestado(this.prestado);
        this.prestado = true;
    }

    devolver() {
        comprobarNoPrestado(this.prestado);
        this.prestado = false;
    }

    toString(){
        return `${super.toString()}, autor: ${this.autor}, prestado: ${this.prestado}.`;
    }
}

class Revista extends Publicacion {
    constructor(titulo, año, numeroEdicion) {
        super(titulo, año);
        this.numeroEdicion = numeroEdicion;
    }

    toString() {
        return `Revista: ${super.toString()}, nº edición: ${this.numeroEdicion}.`;
    }
}

class Biblioteca {
    constructor() {
        this.publicaciones = [];
    }

    añadir(pub) {
        if (!(pub instanceof Publicacion)) {
            throw new TypeError("Error: no es una publicación.");
        }

        const existe = this.publicaciones.some(p => p.titulo === pub.titulo);

        if (existe) {
            throw new Error("Error: ya existe una publicación con este título.");
        }

        this.publicaciones.push(pub);
    }

    prestar(titulo) {
        let pub = this.publicaciones.find(l => l.titulo === titulo);

        if (!pub) {
            throw new Error("No existe ningún libro con el título " + titulo + ".");
        }

        if (pub instanceof Revista) {
            throw new Error("No se puede prestar una revista.");
        }

        pub.prestar();
    }

    devolver(titulo) {
        let pub = this.publicaciones.find(l => l.titulo === titulo);

        if (!pub) {
            throw new Error("No existe ningún libro con el título " + titulo + ".");
        }

        pub.devolver();
    }

    librosDisponibles() {
        let librosDisponibles = this.publicaciones.filter(l => l instanceof Libro && !l.prestado);

        return librosDisponibles;
    }

    listar() {
        for (let j of this.publicaciones) {
            console.log(j.toString());
        }
    }
}
// Excepciones

class TituloVacioException extends Error {
    constructor(message) {
        super(message);
        this.name = "TituloVacioException";
    }
}

class PrestadoException extends Error {
    constructor(message) {
        super(message);
        this.name = "PrestadoException";
    }
}

function comprobarTitulo(titulo) {
    if (!titulo || titulo.trim === "") {
        throw new TituloVacioException("El título no puede estar vacío.");
    }
}

function comprobarPrestado(prestado) {
    if (prestado) {
        throw new PrestadoException("Error: no se puede prestar si está prestado.");
    }
}

function comprobarNoPrestado(prestado) {
    if (!prestado) {
        throw new PrestadoException("Error: no se puede devolver si no está prestado.");
    }
}