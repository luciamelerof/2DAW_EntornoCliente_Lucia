class PiezaNoValida extends Error {
	constructor(tipo) {
		super(`Tipo de pieza no válido: ${tipo}`);
		this.name = "PiezaNoValida";
	}
}

class Pieza {
		#tipo;
		#columna;
		#fila;
		
	constructor(otra) {
		if (otra === undefined) {
			this.#tipo = "p";
			this.#columna = "a";
			this.#fila = 1;
	} else {
			// copia
			if (!(otra instanceof Pieza)) {
				throw new TypeError("Solo se puede copiar una pieza");
			} 
				
			this.#tipo = otra.tipo;
			this.#columna = otra.columna;
			this.#fila  = otra.fila;
		}
	}
	
	get tipo() {
		return this.#tipo;
	}
	
	get columna() {
		return this.#columna;
	}
	
	get fila() {
		return this.#fila;
	}
	
	set tipo(tipo) {
		validarTipo(tipo);
		this.#tipo = tipo;
	}
	
	set columna(columna) {
		validarColumna(columna);
		this.#columna = columna;
	}
	
	set fila(fila) {
		validarFila(fila);
		this.#fila = fila;
	}
	
	mover(columna, fila) {
		validarColumna(columna);
		validarFila(fila);
		
		this.columna = columna;
		this.fila = fila;
	}
	
	valor() {
		let piezas = {p: 1, c: 3, a: 3, t: 5, d: 9, r: 0};
		let pieza = piezas[this.tipo];
		
		if (pieza === 0) {
			throw new Error("El rey no tiene valor");
		}
		
		return pieza;
	}
	
	mostrar() {
		let nombres = {p: "peón", c: "caballo", a: "alfil", t: "torre", d: "dama", r:"rey"};
		let nombre = nombres[this.tipo];
		
		console.log(`${nombre} en ${this.columna}${this.fila}`);
	}
	
	comparar(pieza) {
		if (!(pieza instanceof Pieza)) {
			throw new TypeError("Solo se puede comparar con otra pieza");
		}
		
		if(this.valor() > pieza.valor()) {
			return 1;
		} else if (this.valor() < pieza.valor()) {
			return -1;
		}
		
		return 0;
	}
}

function validarTipo(tipo) {
	if (!["p", "c", "a", "t", "d", "r"].includes(tipo)) {
		throw new PiezaNoValida(tipo);
	}
}

function validarColumna(columna) {
	if(!["a", "b", "c", "d", "e", "f", "g", "h"].includes(columna)) {
		throw new RangeError(`Columna fuera del tablero: ${columna}`);
	}
}

function validarFila(fila) {
	if(!(Number.isInteger(fila)) || ![1, 2, 3, 4, 5, 6, 7, 8].includes(fila)) {
		throw new RangeError(`Fila fuera del tablero ${fila}`);
	}
}

	let p1 = new Pieza();
	p1.mostrar();
	
try {
	p1.tipo = "c";
	p1.valor();
	
	p1.mover("e", 4);
} catch (e) {
	console.log(e);
} finally {
	console.log("-- final de la operación");
}

let p2 = new Pieza(p1);

try {
	p1.tipo = "d";
	p1.valor();
	
	
	p1.mostrar();
	p2.mostrar();
} catch (e){
	console.log(e);
}

try {
	p2.mover("i", 3);
} catch(e) {
	console.log(`${e.name} : ${e.message}`);
}

try {
	p2.fila = 2.5;
} catch (e) {
	console.log(`${e.name} : ${e.message}`);
}

try {
	let pCaballo = new Pieza("caballo", "a", 1);
} catch(e) {
	console.log(`${e.name} : ${e.message}`);
}

try {
	let resultado = p1.comparar(p2);
	console.log("Gana: " + resultado + "1: primera, -1, segunda, 0 empate");
} catch(e) {
	console.log(e);
}

	let p3 = new Pieza(p1);
	
try {
	p3.comparar(p1);
	console.log("Gana: " + resultado + "1: primera, -1, segunda, 0 empate");
} catch(e) {
	console.log(e);
}

	let p4 = new Pieza();
	
try {
	
	p4.tipo = "r";
	
	p4.comparar(p1);
	
	console.log("Gana: " + resultado + "1: primera, -1, segunda, 0 empate");
} catch(e) {
	console.log("Error: " + e.message);
} finally {
	console.log("Comparación terminada");
}

try {
	p1.comparar("dama");
} catch(e) {
	console.log(`${e.name}: ${e.message}`);
}