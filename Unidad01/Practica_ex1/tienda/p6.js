class StockInsuficiente extends Error {
	constructor(nombre, n) {
		super(`Stock insuficiente de ${nombre}: quedan ${n}`);
		this.name = "StockInsuficiente";
	}
}

class Producto {
	static IVA = 0.21;
	
	#ref;
	#nombre;
	#precio;
	#stock;
	
	constructor(ref, nombre, precio) {
		validarRef(ref);
		this.#ref = ref;
		this.#nombre = nombre;
		this.#precio = precio;
		this.#stock = 0;
	}
	
	get ref() {
		return this.#ref;
	}
	
	get nombre() {
		return this.#nombre;
	}
	
	get precio() {
		return this.#precio;
	}
	
	get stock() {
		return this.#stock;
	}
	
	set nombre(nombre) {
		validarNombre(nombre);
		this.#nombre = nombre;
	}
	
	set precio(precio) {
		validarPrecio(precio);
		this.#precio = precio;
	}
	
	reponer(unidades) {
		validarUnidades(unidades);
		
		this.#stock = this.#stock + unidades;
	} 
	
	vender(unidades) {
		validarUnidades(unidades);
		validarStock(unidades, this.#stock);
		
		this.#stock = this.#stock - unidades;
	}
	
	precioFinal() {
		return this.precio * (1 + Producto.IVA);
	}
	
	toString() {
		return `${this.#ref} ${this.#nombre} - ${this.precioFinal().toFixed(2)}€ - stock: ${this.#stock}`;
	}
}

class ProductoPerecedero extends Producto {
	static DESCUENTO = 0.3;
	
	#dias;
	
	constructor(ref, nombre, precio, dias) {
		super(ref, nombre, precio);
		this.#dias = dias;
	}
	
	get dias() {
		return this.#dias;
	}
	
	vender(unidades) {
		if (this.#dias <= 0) {
			throw new Error(`${this.ref} está caducado`);
		}
		
		super.vender(unidades);
	}	
	
	precioFinal() {
		if(this.#dias <= 3) {
			return super.precioFinal() * (1 - ProductoPerecedero.DESCUENTO);
		} 
		return super.precioFinal();
	}
	
	pasarDia() {
		if (this.#dias > 0) {
			this.#dias = this.#dias - 1;
		} else {
			this.#dias = this.#dias;
		}
	}
	
	toString() {
		if (this.#dias > 0) {
			return `${super.toString()} - caduca en ${this.#dias} días`;
		}
		
		return `${super.toString()} - CADUCADO`;
	}
}

class Tienda {
	#nombre;
	#productos = [];
	#ventas = 0;
	
	constructor(nombre) {
		this.#nombre = nombre;
	}
	
	get nombre() {
		return this.#nombre;
	}
	
	añadir(producto) {
		validarProducto(producto);
		
		let ref = this.#productos.some(p => p.ref === producto.ref);
		
		if (ref) {
			throw new Error(`Ya existe el producto ${producto.ref}`);
		} 
		
		this.#productos.push(producto);
	}
	
	reponer(ref, unidades) {
		let refe = this.#productos.some(p => p.ref === ref);
		
		if(!refe) {
			throw new Error(`No existe el producto ${ref}`);
		}
		let producto = this.#productos.find(p => p.ref === ref);
		
		producto.reponer(unidades);
	}
	
	vender(ref, unidades) {
		let refe = this.#productos.some(p => p.ref === ref);
		let producto = this.#productos.find(p => p.ref === ref);
		
		if(!refe) {
			throw new Error(`No existe el producto ${ref}`);
		}
		
		producto.vender(unidades);
		
		let precio = producto.precioFinal() * unidades;
		
		this.#ventas += precio;
		
		return precio;
	}
	
	pasarDia() {
		for(let i of this.#productos) {
			if(i instanceof ProductoPerecedero) {
				i.pasarDia();
			}
		}
	}
	
	sinStock() {
		let sinStock = this.#productos.filter(p => p.stock === 0);

		return sinStock;
	}
	
	totalVentas() {
		return this.#ventas;
	}
	
	listar() {
		for(let i of this.#productos) {
			console.log(i.toString());
		}
	}
}

function validarRef(ref) {
	if (ref.length < 6) {
	throw new Error(`La referencia debe tener más de 6 caracteres: ${ref}`);
	}
}

function validarNombre(nombre) {
	if (!nombre || nombre.trim() === "") {
		throw new Error(`El nombre no puede estar vacío`);
	}
}

function validarPrecio(precio) {
	if(precio <= 0) {
		throw new RangeError(`El precio debe ser mayor que 0`);
	}
}

function validarUnidades(unidades) {
	if(!Number.isInteger(unidades)  || unidades <= 0) {
		throw new RangeError("Unidades no válidas");
	}
}

function validarStock(unidades, stock) {
	if (unidades > stock) {
		throw new StockInsuficiente(unidades, stock);
	}
}

function validarProducto(producto) {
	if (!(producto instanceof Producto)) {
		throw new TypeError("Solo se pueden añadir productos");
	} 
}

function venderYMostrar(tienda, ref, unidades) {
	try {
	let importe = tienda.vender(ref, unidades);
	
	console.log(`Venta ${ref}: ${importe.toFixed(2)}€`);
	} catch (e) {
		console.log("Error: " + e.message);
	} finally {
		console.log(`--fin de la operación ${ref}`);
	}
}
	let t1 = new Tienda("Ayala Market");
	
	let p1 = new Producto("TE0001", "Teclado" , 20);
	let p2 = new ProductoPerecedero("AL0001", "Yogur", 1, 5)
	t1.añadir(p1);
	t1.añadir(p2);
	t1.añadir(new Producto("RA0001", "Ratón", 10));
	

	
	try {
		t1.reponer("TE0001", 10);
		t1.reponer("AL0001", 20);
		let p1 = new Producto("X1", "Cargador", 12);
	} catch(e) {
		console.log(e.message);
	}
	
	try {
		let p2 = new Producto("CA0001", "Cable", 0);
	} catch(e) {
		console.log(e.name + ": " + e.message);
	}
	
	try {
		t1.añadir("Teclado");
	} catch(e) {
		console.log(e.name + ":" + e.message);
	}
	
	try {
		t1.añadir(new Producto("TE0001", "Hola", 40));
	} catch(e) {
		console.log(e.message);
	}
	
	try {
		p1.nombre = "  ";
	} catch(e) {
		console.log(e.message);
	}
	
	try {
		t1.reponer("TE0001", -2);
	} catch(e) {
		console.log(e.message);
	}
	
	venderYMostrar(t1, p1.ref, 15);
	
	venderYMostrar(t1, p1.ref, 3);
	
	try {
	t1.pasarDia();
	t1.pasarDia();
	
venderYMostrar(t1, "AL0001", 4);
venderYMostrar(t1, "RA0001", 1);
venderYMostrar(t1, "PZ9999", 1);
	} catch (e) {
		console.log(e);
	}
	
	
	for (let i = 0; i < 3; i++) {
		t1.pasarDia();
	}
	
	try {
	venderYMostrar(t1, "AL0001", 1);
	} catch (e) {
		console.log(e);
	}

	
	t1.listar();
	
	let sinStock = t1.sinStock();
	
	for (let i of sinStock) {
		console.log(i);
	}
	
	let totalVentas = t1.totalVentas();
	
	console.log(`Total ventas: ${totalVentas.toFixed(2)}`);