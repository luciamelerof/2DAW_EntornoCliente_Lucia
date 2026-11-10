let cuadrado = document.querySelector("#cuadrado");
let colorOriginal = "darkblue";
// Cuando se pase el ratón por encima, cuadrado azul
cuadrado.addEventListener("mouseover", () => {
    cuadrado.style.backgroundColor = colorOriginal;
});

// Cuando se quite el ratón de encima, cuadrado azul claro
cuadrado.addEventListener("mouseout", () => {
    cuadrado.style.backgroundColor = "lightblue";
});

cuadrado.addEventListener("click", () => {
    cuadrado.style.backgroundColor = "red";
});

cuadrado.addEventListener("dblclick", () => {
    cuadrado.style.backgroundColor = "green";
});