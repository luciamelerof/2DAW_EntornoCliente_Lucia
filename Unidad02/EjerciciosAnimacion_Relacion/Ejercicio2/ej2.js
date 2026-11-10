let contador = 0;
let texto = document.getElementById("contador");

let btnSumar = document.getElementById("sumar");
let btnReiniciar = document.getElementById("reiniciar");
let btnRestar = document.getElementById("restar");

btnSumar.addEventListener("click", () => {
    contador++;
    texto.textContent = contador;
});

btnRestar.addEventListener("click", () => {
    contador--;
    texto.textContent = contador;
});

btnReiniciar.addEventListener("click", () => {
    contador = 0;
    texto.textContent = contador;
});