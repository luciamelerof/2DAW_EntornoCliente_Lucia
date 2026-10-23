class Carta {
    #n;
    #p;

    constructor(n = 1, p = "c") {
        if (n instanceof Carta) {
            this.#n = n.#n;
            this.#p = n.#p;
        } else {
            this.#n = 1;
            this.#p = "c";
            this.setN(n);
            this.setP(p);
        }
    }

    getN() {
        return this.#n;
    }

    getP() {
        return this.#p;
    }

    setN(valor) {
        this.#n = valor;
    }

    setP(valor) {
        this.#p = valor;
    }

    mostrarCarta() {
        const palos = { p: "picas", t: "tréboles", c: "corazones", r: "rombos" };
        const especiales = { 1: "As", 11: "Jack", 12: "Reina", 13: "Rey" };

        const numero = especiales[this.#n] ?? this.#n;
        const articulo = this.#n === 12 ? "la" : "el";

        console.log(`Es ${articulo} ${numero} de ${palos[this.#p]}.`);
    }

    compararCarta(otra) {
        const ordenPalos = { t: 4, r: 3, p: 2, c: 1 };

        if (this.#n !== otra.#n) {
            return this.#n > otra.#n ? 1 : -1;
        }
        if (this.#p !== otra.#p) {
            return ordenPalos[this.#p] > ordenPalos[otra.#p] ? 1 : -1;
        }
        return 0;
    }
}

// Prueba
const c1 = new Carta(12, "t");
c1.mostrarCarta();               // Es la Reina de tréboles.

const c2 = new Carta(c1);
c2.setP("p");
c2.mostrarCarta();               // Es la Reina de picas.

const resultado = c1.compararCarta(c2);

if (resultado === 1) {
    console.log("Gana c1");
} else if (resultado === -1) {
    console.log("Gana c2");
} else {
    console.log("EMPATE");
}

// Excepciones
class ExcepcionesCarta extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionesCarta";
        this.autor = "Lucía Melero Fernández";
    }
}

function comprobarValores(carta) {
    if (!Number.isInteger(carta.getN()) || carta.getN() < 1 || carta.getN() > 13) {
        throw new ExcepcionesCarta("Número de carta incorrecto (1 - 13).");
    } else if (!['p', 'r', 't', 'c'].includes(carta.getP())) {
        throw new ExcepcionesCarta("Palo inválido. (p, t, c, r).");
    }
}

// Prueba de excepciones
const pruebas = [
    new Carta(1, "manzanas"),
    new Carta(-5, "r"),
    new Carta(7, "c")
];

for (const carta of pruebas) {
    try {
        comprobarValores(carta);
        carta.mostrarCarta();
    } catch (err) {
        if (err instanceof ExcepcionesCarta) {
            console.log(`${err.name}: ${err.message} (Autora: ${err.autor})`);
        } else {
            console.log("Error inesperado:", err.message);
        }
    }
}