class Socio {
	static CUOTA = 30;
	
	#dni;
	#nombre;
	#asistencias;
	#activo;
	
	constructor(dni, nombre, asistencias = 0, activo = true) {
		validarDNI(dni);
		this.#dni = dni;
		this.nombre = nombre; // lo valida el setter nombre() 
		this.#asistencias = asistencias;
		this.#activo = activo;
	}
	
	get dni() {
		return this.#dni;
	}
	
	get nombre() {
		return this.#nombre;
	}
	
	get asistencias() {
		return this.#asistencias;
	}
	
	get activo() {
		return this.#activo;
	}
	
	set nombre(nombre) {
		validarNombre(nombre);
		this.#nombre = nombre;
	}
	
	registrarAsistencia() {
		if (!this.activo) {
			throw new Error(`Error: el socio ${this.dni} está de baja`);
		}
		
		this.#asistencias++;
	}
	
	darDeBaja() {
		if(!this.activo) {
			throw new Error(`Error: el socio ${this.dni} ya está de baja`);
		}
		
		this.#activo = false;
	}
	
	cuota() {
		return Socio.CUOTA;
	}
	
	toString() {
		return `DNI: ${this.dni} - nombre: ${this.nombre} - asistencias: ${this.asistencias} - está activo ${this.activo} - cuota ${this.cuota().toFixed(2)}€`;
	}
}

class SocioPremium extends Socio {
	static PLUS = 15;
	
	#entrenador;
	
	constructor(dni, nombre, entrenador) {
		super(dni, nombre);
		this.#entrenador = entrenador;
	}
	
	get entrenador() {
		return this.#entrenador;
	}
	
	cuota() {
		if (this.asistencias < 20) {
			return super.cuota() + SocioPremium.PLUS;
		} else {
			return (super.cuota() + SocioPremium.PLUS) * (1 - 0.1);
		}
	}
	
	toString() {
		return `Premium: ${super.toString()} - entrenador: ${entrenador}`;
	}
}

class Gimnasio {
	
	#nombre;
	
	constructor(nombre) {
		this.#nombre = nombre; 
		this.socios = [];
	}
	
	get nombre() {
		return this.#nombre;
	}
	
	alta(socio) {
		if (!(socio instanceof Socio)) {
			throw new TypeError("Solo se pueden dar de alta socios");
		}
		
		if (this.socios.some(s => s.dni === socio.dni)) {
			throw new Error(`Ya existe un socio con el dni ${socio.dni}`);
		}
		
		this.socios.push(socio);
	}
	
	buscar(dni) {
		let socioABuscar = this.socios.find(s => s.dni === dni);
		
		if (!socioABuscar) {
			throw new SocioNoEncontrado(dni);
		}
		
		return socioABuscar;
	}
	
	asistencia(dni) {
		let socio = this.buscar(dni);
		socio.registrarAsistencia();
	}
	
	baja(dni) {
		let socio  = this.buscar(dni);
		socio.super.darDeBaja();
	}
	
	activos() {
		let activos = this.socios.filter(s => s.activo === true);
		
		return activos;
	}
	
	recaudacion() {
		let recaudacion = 0;
		for (let s of this.socios) {
			if (s.activo === true) {
				recaudacion += s.cuota();
			}
		}
		
		return recaudacion;
	}
	
	listar() {
		for(let s of this.socios) {
			console.log(s.toString());
		}
	}
}

class SocioNoEncontrado extends Error {
	constructor(dni) {
		super(`No existe el socio con el DNI ${dni}`);
		this.name = "SocioNoEncontrado";
	}
}

function validarDNI(dni) {
	if(!/^\d{8}[A-Z]$/.test(dni)) {
		throw new Error(`Error: DNI no válido: ${dni}`);
	}
}

function validarNombre(nombre) {
	if (!nombre || nombre.trim() === "") {
		throw new Error(`Error: El nombre no puede estar vacío`);
	}
}

