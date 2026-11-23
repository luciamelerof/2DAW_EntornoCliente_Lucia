// Capturo elementos
const bNuevo = document.getElementById('nuevoBombo');
const bMezclar = document.getElementById('mezclar');
const bSacar = document.getElementById('sacarBola');
const bCortar = document.getElementById('cortar');

const zonaNumero = document.getElementById('zonaNumero');
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

    zonaNumero.style.background = 'blue';
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

    if (bola.numero <= 30) {
        zonaNumero.style.background = 'blue';
    } else if (bola.numero <= 60) {
        zonaNumero.style.background = 'green';
    } else {
        zonaNumero.style.background = 'red';
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

zonaNumero.addEventListener('dblclick', () => {
    if (miBombo.quedan() === 90) {
        mensaje.textContent = `Aún no ha salido ninguna bola`;
        return;
    }

    mensaje.textContent = `Línea con el número ${numero.textContent}`;

});

