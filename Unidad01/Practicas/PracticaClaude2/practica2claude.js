class Cuenta {
    constructor(iban, titular, saldo = 0) {
        this.iban = iban;
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(cantidad) {
        if (cantidad <= 0) {
            throw new RangeError(`Cantidad no válida.`);
        }

        this.saldo += cantidad;
    }

    retirar(cantidad) {
        if (cantidad > this.saldo || this.saldo < 0) {
            throw new Error("Saldo insuficiente.");
        }

        this.saldo -= cantidad;
    }

    transferir(destino, cantidad) {
        if (cantidad > this.saldo || cantidad <= 0) {
            throw new RangeError("Operación cancelada.");
        }

        this.retirar();
        destino.ingresar();
    }

    toString() {
        return `Datos de cuenta: IBAN ${this.iban} - titular ${this.titular} - saldo ${this.saldo}€`;
    }
}

class CuentaAhorro extends Cuenta {
    constructor(iban, titular, saldo, interes) {
        super(iban, titular, saldo);
        this.interes = interes;
    }

    retirar(cantidad) {
        if (cantidad > 500) {
            throw new Error("Máximo 500 € por retirada.");
        }

        super.retirar(ahorro);
    }

    aplicarInteres() {
        this.saldo += this.saldo * this.interes / 100;
    }

    toString() {
        return `${super.toString()} - interés: ${this.interes}.`;
    }
}

class CuentaCorriente extends Cuenta {
    constructor(iban, titular, saldo, limite) {
        super(iban, titular, saldo);
        this.limite = limite;
    }

    retirar(cantidad) {
        if (cantidad > this.saldo + this.limite) {
            throw new Error("Supera el límite de descubierto.");
        }
    }

    toString() {
        return `${super.toString()} - límite: ${this.limite}.`;
    }
}

class Banco {
    constructor() {
        this.cuentas = [];
    }

    abrir(cuenta) {
        let existe = this.cuentas.some(c => c.iban === cuenta.iban);

        if (existe) {
            throw new Error(`La cuenta con el IBAN ${cuenta.iban} ya existe.`);
        }

        this.cuentas.push(cuenta);
    }

    buscar(iban) {
        let existe = this.cuentas.some(c => c.iban === iban);

        if (!existe) {
            throw new Error(`No existe ninguna cuenta con el IBAN ${iban}.`);
        }

        let cuenta = this.cuentas.find(c => c.iban === iban);

        console.log(cuenta.toString());
    }

    total() {

        let total = 0;

        fn((cuentas) => total += cuentas.saldo);

        return total;
    }

    morosos() {
        let morosos = this.cuentas.filter(c => c.saldo < 0);

        return morosos;
    }

    listar() {
        for (let c of this.cuentas) {
            console.log(c.toString());
        }
    }
}
