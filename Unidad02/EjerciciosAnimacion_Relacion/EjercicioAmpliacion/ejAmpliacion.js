let pipParado = document.getElementById("pipParado");

let teclas = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "a", "d", "w", "s"];
let miVentana = document.querySelector("html");

miVentana.addEventListener("keydown", (context) => {
    // PIP
    if (context.key === "ArrowRight" || context.key === "d") {
        pipParado.style.left = parseInt(pipParado.style.left) + 10 + "px";
    }

    if (context.key === "ArrowLeft" || context.key === "a") {
        pipParado.style.left = parseInt(pipParado.style.left) - 10 + "px";
    }

    if (context.key === "ArrowUp" || context.key === "w") {
        pipParado.style.top = parseInt(pipParado.style.top) - 10 + "px";
    }

    if (context.key === "ArrowDown" || context.key === "s") {
        pipParado.style.top = parseInt(pipParado.style.top) + 10 + "px";
    }

    if(teclas.includes(context.key) && !pipParado.src.includes("pip_caminando.gif")) {
        pipParado.src = "../pip_caminando.gif";
    }
});

miVentana.addEventListener("keyup", (context) => {
    if(teclas.includes(context.key)) {
        pipParado.src = "../pip_parado.png";
    }
});



