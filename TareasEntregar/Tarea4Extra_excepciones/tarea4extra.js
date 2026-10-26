class Jugador {
    #dorsal;
    #nombre;
    #estadisticas;

    constructor(dorsal, nombre) {
        validarDorsalesNegativos(dorsal);
        this.#dorsal = dorsal;
        this.#nombre = nombre;
        this.#estadisticas = [];
    }

    get dorsal() {
        return this.#dorsal;
    }

    get nombre() {
        return this.#nombre;
    }

    get estadisticas() {
        return this.#estadisticas;
    }

    set dorsal(dorsal) {
        validarDorsalesNegativos(dorsal);
        this.#dorsal = dorsal;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    añadirGolesPorPartido(partido, goles) {
        validarNegativos(goles, partido);
        let golesPartido = this.#estadisticas[partido - 1] ?? 0;

        this.#estadisticas[partido - 1] = golesPartido + goles;
    }

    obtenerGoles(partido) {
        let golesPartido = this.#estadisticas[partido - 1] ?? 0;

        return golesPartido;
    }
}

class Equipo {
    #nombre;
    #jugadores;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#jugadores = [];
    }

    get nombre() {
        return this.#nombre;
    }

    get jugadores() {
        return this.#jugadores;
    }

    set nombre(nombre) {
        this.#nombre = nombre;
    }

    añadirJugador(jugador) {
        validarDorsalesRepetidos(this, jugador.dorsal);
        this.#jugadores.push(jugador);
    }

    borrarJugador(dorsal) {
        this.#jugadores = this.#jugadores.filter(j => j.dorsal !== dorsal);
    }

}
class ExcepcionNegativos extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionNegativos";
    }
}

class ExcepcionDorsales extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionDorsales";
    }
}

class ExcepcionJugadorRepetido extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionJugadorRepetido";
    }
}

function validarNegativos(goles, partidos) {
    if (goles < 0 || partidos < 1) {
        throw new ExcepcionNegativos("No se ha podido añadir: goles/partidos negativos.");
    }

    return true;
}

function validarDorsalesNegativos(dorsal) {
    if (dorsal < 0) {
        throw new ExcepcionDorsales("No se ha podido añadir. Dorsal < 0.");
    }

    return true;
}

function validarDorsalesRepetidos(equipo, dorsalNuevo) {
    if (equipo.jugadores.some(j => j.dorsal === dorsalNuevo)) {
        throw new ExcepcionJugadorRepetido(`Ya existe un jugador con el dorsal ${dorsalNuevo}.`);
    }

    return true;
}

try {
    const equipo = new Equipo("Málaga");
    const j1 = new Jugador(8, "Chupete");
    equipo.añadirJugador(j1);

    j1.añadirGolesPorPartido(1, 2);
    j2.añadirGolesPorPartido(1, 1);
    console.log(j1.obtenerGoles(1));

    equipo.añadirJugador(new Jugador(10, "Lucía"));
} catch (e) {
    console.error(`${e.name}: ${e.mensaje}`);
}



