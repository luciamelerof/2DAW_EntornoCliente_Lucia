const tarea = document.getElementById('nuevaTarea');
const btnAnadir = document.getElementById('btnAnadir');
const lista = document.getElementById('lista');
const error = document.getElementById('error');
const contador = document.getElementById('contador');

btnAnadir.addEventListener('click', añadirTarea);

tarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        añadirTarea();
    }
});

function añadirTarea() {
    error.textContent = '';
    const texto = tarea.value.trim();

     if (texto === '') {
        error.textContent = 'Escribe algo';
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;
    lista.append(li);
    tarea.value = '';

    li.addEventListener('click', () => {
        li.classList.toggle('hecha');
        actualizarContador();
    });

    li.addEventListener('dblclick', () => {
        li.remove();
        actualizarContador();
    });

    actualizarContador();
}

function actualizarContador() {
    const pendientes = lista.querySelectorAll('li:not(.hecha)');
    contador.textContent = pendientes.length;
}