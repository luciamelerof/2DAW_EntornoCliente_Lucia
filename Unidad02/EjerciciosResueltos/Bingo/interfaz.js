// Capturo elementos
const bNuevo = document.getElementById('nuevoBombo');
const bMezclar = document.getElementById('mezclar');
const bSacar = document.getElementById('sacarBola');
const bCortar = document.getElementById('cortar');

const numero = document.getElementById('numero');
const quedan = document.getElementById('quedan');
const salido = document.getElementById('salido');
const mensaje = document.getElementById('mensaje');

// Creo el objeto
let miBombo = new Bombo();
quedan.textContent = miBombo.quedan();

// Nuevo Bombo (hecho, como ejemplo)
bNuevo.addEventListener('click', () => {
    miBombo = new Bombo(); // objeto nuevo(ordenado)
    numero.textContent = '';
    salido.textContent = '';
    quedan.textContent = miBombo.quedan();
    mensaje.textContent = 'Bombo nuevo';
});

// Sacar 
bSacar.addEventListener('click', () => {
    const bola = miBombo.sacar();

    // 1. No quedan: aviso y salgo
    if (bola === null) {
        mensaje.textContent = '¡Ya han salido todas!';
        return;
    }

    // 2. Hay bola: la muestro
    mensaje.textContent = '';
    numero.textContent = bola.numero;
    quedan.textContent = miBombo.quedan();

    if (salido.textContent === '') {
        salido.textContent = bola.numero;
    } else {
        salido.textContent += ', ' + bola.numero;
    }
});

bMezclar.addEventListener('click', () => {
    miBombo.mezclar();
    mensaje.textContent = 'Bombo mezclado';
});

bCortar.addEventListener('click', () => {
    const pos = miBombo.cortar();
    mensaje.textContent = `Cortado por la posición ${pos}`;
});
