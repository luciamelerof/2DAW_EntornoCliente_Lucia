class Dado {
    static carasDefecto = 6;
    #caras = Dado.carasDefecto;

    constructor(caras = Dado.carasDefecto) {
        this.caras = caras; // caras del set
    }

    get caras() {
        return this.#caras;
    }

    set caras(nuevo) {
        if (Number.isInteger(nuevo) && nuevo >= 2) {
            this.#caras = nuevo;
        } else {
            console.log("Caras no válidas");
        }
    }

    lanzar() {
        return Math.floor(Math.random() * this.#caras) + 1;
    }

    toString() {
        return `D${this.caras}`;
    }
}

class Cubilete {
    #dados = [];


    meter(dado) {
        if (dado instanceof Dado) {
            this.#dados.push(dado);
        } else {
            console.log("No has insertado un objeto dado.");
        }
    }

    get cantidad() {
        return this.#dados.length;
    }

    lanzarTodos() {
        return this.#dados.map(d => d.lanzar());
    }

    tirar() {
        const resultado = this.lanzarTodos();

        const suma = resultado.reduce((sum, d) => sum + d, 0);

        console.log(`Tirada: [${resultado.join("-")}] -> TOTAL: ${suma}`);

        return suma;
    }

    toString() {
        return `Cubilete con ${this.#dados.join(", ")}`;
    }
}


const normal = new Dado();
const rol = new Dado(20);

console.log(normal.lanzar());
console.log(rol.lanzar());
console.log(rol);
