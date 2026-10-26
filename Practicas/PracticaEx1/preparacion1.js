class Terminal {
    constructor(numero, segundos = 0) {
        this.numero = numero;
        this.segundos = segundos;
    }

    llama(otro, segundos){
        this.segundos += segundos;
        otro.segundos += segundos;
    }

    get segundos() {
        return this.segundos;
    }

    get numero() {
        return this.numero;
    }

    set segundos(segundos) {
        this.segundos = segundos;
    }

    set numero(numero) {
        this.numero = numero;
    }

    toString() {
        return `Nº ${this.numero} - ${this.segundos}s de conversación`;
    }

}

class Movil extends Terminal {
    static PRECIOS = { rata: 6, mono: 12, bisonte: 30 };

    constructor(numero, tarifa) {
        super(numero);
        this.tarifa = tarifa;
        this.tarificado = 0;
        this.conversaciones = [];
    }

    llama(otro,segundos) {
        super.llama(otro,segundos);
        this.tarificado += (segundos/60) * Movil.PRECIOS[this.tarifa] / 100;
    
        let llamada = {origen: this.numero, destino: otro.numero, segundos};
        this.conversaciones = this.conversaciones.push(llamada);
        if (otro instanceof Movil) otro.conversaciones.push(llamada);
    }

    get tarifa() {
        return this.tarifa;
    }

    set tarifa(tarifa) {
        this.tarifa = tarifa;
    }

    toString() {
        return `${super.toString()} tarificados ${this.tarificado} euros`;
    }
}

class Compania {
    constructor (nombre) {
        this.nombre = nombre;
        this.clientes = [];
    }

    añadirCliente(movil) {
        this.clientes.push(movil);
    } 

    totalFacturado() {
        let total = 0;
        for(let movil of this.clientes) {
            total += movil.tarificado;
        }
        return total;
    }

    listarClientes() {
        for (let movil of this.clientes) {
            console.log(movil.toString());
        }
    }

    conversacionesDe(numero) {
        let movil = this.clientes.find(m => m.numero === numero);
        if(!movil) return console.log("Cliente no encontrado.");
    
        for(let c of movil.conversaciones) {
             console.log(`${c.origen} → ${c.destino}: ${c.segundos}s`);
    }

    }
    
    get telefonos() {
        return this.telefonos;
    }

    set telefonos(telefonos) {
        this.telefonos = telefonos;
    }
}