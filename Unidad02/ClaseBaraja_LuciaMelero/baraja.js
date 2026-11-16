// CLASE CARTA
class Carta {
    #n;
    #p;
    #tipo;
    #robada;

    static PALOS = {
        francesa: { c: "corazones", r: "rombos", p: "picas", t: "tréboles" },
        espanola: { o: "oros", c: "copas", e: "espadas", b: "bastos" }
    };

    static ESPECIALES = {
        francesa: { 1: "As", 11: "Jack", 12: "Reina", 13: "Rey" },
        espanola: { 1: "As", 10: "Sota", 11: "Caballo", 12: "Rey" }
    };

    static MAX = { francesa: 13, espanola: 12 };

    constructor(n = 1, p = "c", tipo = "francesa") {
        if (n instanceof Carta) {
            this.#n = n.#n;
            this.#p = n.#p;
            this.#tipo = n.#tipo;
            this.#robada = n.#robada;
        } else {
            this.n = n;
            this.p = p;
            this.#tipo = tipo;
            this.#robada = false;
        }
    }

    get n() { return this.#n; }
    get p() { return this.#p; }
    get tipo() { return this.#tipo; }
    get robada() { return this.#robada; }
    get imagen() { return `baraja_francesa_52_cartas/${this.#p}${this.#n}.jpg`; }

    set n(valor) { this.#n = valor; }
    set p(valor) { this.#p = valor; }
    set robada(valor) { this.#robada = Boolean(valor); }

    toString() {
        const palos = Carta.PALOS[this.#tipo];
        const especiales = Carta.ESPECIALES[this.#tipo];

        const numero = especiales[this.#n] ?? this.#n;
        const articulo = (numero === "Reina" || numero === "Sota") ? "la" : "el";

        return `${articulo} ${numero} de ${palos[this.#p]}`;
    }

    mostrarCarta() {
        console.log(`Es ${this.toString()}.`);
    }

    compararCarta(otra) {
        const ordenPalos = {
            francesa: { t: 4, r: 3, p: 2, c: 1 },
            espanola: { b: 4, e: 3, c: 2, o: 1 }
        }[this.#tipo];

        if (this.#n !== otra.#n) {
            return this.#n > otra.#n ? 1 : -1;
        }
        if (this.#p !== otra.#p) {
            return ordenPalos[this.#p] > ordenPalos[otra.#p] ? 1 : -1;
        }
        return 0;
    }
}

// EXCEPCIONES
class ExcepcionesCarta extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ExcepcionesCarta";
        this.autor = "Lucía Melero Fernández";
    }
}

function comprobarValores(carta) {
    const max = Carta.MAX[carta.tipo];
    const palos = Object.keys(Carta.PALOS[carta.tipo]);

    if (!Number.isInteger(carta.n) || carta.n < 1 || carta.n > max) {
        throw new ExcepcionesCarta(`Número de carta incorrecto (1 - ${max}).`);
    } else if (!palos.includes(carta.p)) {
        throw new ExcepcionesCarta(`Palo inválido (${palos.join(", ")}).`);
    }
}

// CLASE BARAJA
class Baraja {
    #cartas;
    #tipo;

    constructor(tipo = "francesa") {
        this.#tipo = tipo;
        this.#cartas = [];

        // El orden de las claves en PALOS ya es el pedido:
        // Francesa: corazones, rombos, picas, tréboles
        // Española: oros, copas, espadas, bastos
        const palos = Object.keys(Carta.PALOS[tipo]);
        const max = Carta.MAX[tipo];

        for (const palo of palos) {
            for (let n = 1; n <= max; n++) {
                this.#cartas.push(new Carta(n, palo, tipo));
            }
        }
    }

    get tipo() { return this.#tipo; }

    robar() {
        const carta = this.#cartas.find(c => !c.robada);
        if (!carta) {
            return null;
        }
        carta.robada = true;
        return new Carta(carta);
    }

    numCartas() {
        return this.#cartas.filter(c => !c.robada).length;
    }

    barajar(veces = 100) {
        for (let i = 0; i < veces; i++) {
            const a = Math.floor(Math.random() * this.#cartas.length);
            const b = Math.floor(Math.random() * this.#cartas.length);
            [this.#cartas[a], this.#cartas[b]] = [this.#cartas[b], this.#cartas[a]];
        }
    }

    cortar() {
        const pos = Math.floor(Math.random() * (this.#cartas.length - 1)) + 1;
        this.#cartas = this.#cartas.slice(pos).concat(this.#cartas.slice(0, pos));
        return pos;
    }

    mostrarBaraja() {
        this.#cartas.forEach((c, i) => {
            console.log(`${i + 1}. ${c.toString()}${c.robada ? " (robada)" : ""}`);
        });
    }
}

// PRUEBA CARTA
console.log("=== PRUEBA CARTA ===");
const c1 = new Carta(12, "t");
c1.mostrarCarta();               // Es la Reina de tréboles.

const c2 = new Carta(c1);
c2.p = "p";
c2.mostrarCarta();               // Es la Reina de picas.

const resultado = c1.compararCarta(c2);
if (resultado === 1) {
    console.log("Gana c1");
} else if (resultado === -1) {
    console.log("Gana c2");
} else {
    console.log("EMPATE");
}

// PRUEBA EXCEPCIONES
console.log("\n=== PRUEBA EXCEPCIONES ===");
const pruebas = [
    new Carta(1, "manzanas"),
    new Carta(-5, "r"),
    new Carta(7, "c"),
    new Carta(13, "o", "espanola")
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

// PRUEBA BARAJA
console.log("\n=== BARAJA FRANCESA ORDENADA ===");
const francesa = new Baraja("francesa");
francesa.mostrarBaraja();
console.log(`Cartas en el mazo: ${francesa.numCartas()}`);

console.log("\n=== BARAJAR ===");
francesa.barajar();
francesa.mostrarBaraja();

console.log("\n=== CORTAR ===");
const posCorte = francesa.cortar();
console.log(`Corte en la posición ${posCorte}`);
francesa.mostrarBaraja();

console.log("\n=== ROBAR ===");
const robada1 = francesa.robar();
const robada2 = francesa.robar();
console.log(`Primera carta robada: ${robada1.toString()}`);
console.log(`Segunda carta robada: ${robada2.toString()}`);
console.log(`Cartas que quedan: ${francesa.numCartas()}`);

console.log("\n=== COMPARAR CARTAS ROBADAS ===");
const res = robada1.compararCarta(robada2);
console.log(res === 1 ? "Gana la primera" : res === -1 ? "Gana la segunda" : "EMPATE");

console.log("\n=== BARAJA ESPAÑOLA ===");
const espanola = new Baraja("espanola");
console.log(`Cartas en el mazo: ${espanola.numCartas()}`);
espanola.barajar();
espanola.cortar();
const robadaEsp = espanola.robar();
console.log(`Carta robada: ${robadaEsp.toString()}`);
console.log(`Cartas que quedan: ${espanola.numCartas()}`);
