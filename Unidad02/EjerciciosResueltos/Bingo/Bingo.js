class Bola {
    constructor(numero) {
        this.numero = numero;
        this.salida = false;
    }
}

class Bombo {
    constructor() {
        this.bolas = [];
        for (let n = 1; n <= 90; n++) {
            this.bolas.push(new Bola(n));
        }
    }

    mezclar() {
        for (let n = this.bolas.length - 1; n > 0; n--) {
            const m = Math.floor(Math.random() * (n + 1));
            const aux = this.bolas[n];
            this.bolas[n] = this.bolas[m];
            this.bolas[m] = aux;
        }
    }

    sacar() {
        for (let b of this.bolas) {
            if(!b.salida) {
                b.salida = true;
                return b;
            }
        }
        return null;
    }

    quedan() {
        let contador = 0;
        for(let b of this.bolas) {
            if(!b.salida) {
                contador++;
            }
        }

        return contador;
    }

    cortar() {
        const posicion = Math.floor(Math.random() * (this.bolas.length));
        
        const principio = this.bolas.slice(0, posicion);
        const final = this.bolas.slice(posicion);

        this.bolas = final.concat(principio);

        return posicion;
    }
}