class Carta {
    #n;
    #p;

    constructor(otra) {
        if (otra instanceof Carta) {
            this.#n = otra.getN();
            this.#p = otra.getP();
        } else {
            this.#n = 1;
            this.#p = "c";
        }
    }

    getN() {
        return this.#n;
    }

    getP() {
        return this.#p;
    }

    setN(valor) {
        if (Number.isInteger(valor) && valor >= 1 && valor <= 13) {
            this.#n = valor;
        } else {
            console.log("Número no válido. (1-13).");
        }
    }

    setP(valor) {
        if (["p", "t", "c", "r"].includes(valor)) {
            this.#p = valor;
        } else {
            console.log("Palo no válido. [p, t, c, r].");
        }
    }

    mostrarCarta() {
        const palos = { p: "picas", t: "treboles", c: "corazones", r: "rombos" };
        const especiales = { 1: "As", 11: "Jack", 12: "Reina", 13: "Rey" };

        const numero = especiales[this.#n] ?? this.#n;

        /*
        if (numero == 1 || numero == 11 || numero == 12 || numero == 13) {
            numero = especiales[this.#n];
        } else {
            numero = this.#n;
        }

*/
        const palo = palos[this.#p];

        console.log(`Es el ${numero} de ${palo}.`);
    }

    compararCarta(otra) {
        const ordenPalos = { t: 4, r: 3, p: 2, c: 1 };
        let resultado = 0;

        if (this.getN() !== otra.getN()) {
            resultado = this.getN() > otra.getN() ? 1 : -1;
        } else if (this.getP() !== otra.getP()) {
            resultado = ordenPalos[this.getP()] > ordenPalos[otra.getP()] ? 1 : -1;
        }

        /*
        if (resultado === 1) {
            console.log("Gana la carta actual.");
        } else if (resultado === -1) {
            console.log("Gana la carta recibida.");
        } else {
            console.log("Empate.");
        }
        */

        return resultado;
    }
}

// Prueba
const c1 = new Carta(12, "t");
c1.mostrarCarta();               // Es la Reina de treboles

const c2 = new Carta(c1);
c2.setP("p");
c2.mostrarCarta();               // Es la Reina de picas

if (c1.compararCarta(c2) == 1) {
    console.log("Gana c2");
} else if (c1.compararCarta(c2) == -1) {
    console.log("Gana c1");
} else {
    console.log("EMPATE");
}
