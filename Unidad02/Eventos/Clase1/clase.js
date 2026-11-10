let lucia = document.querySelector("#lucia");
let token = document.querySelector("#token");

let miVentana = document.querySelector("html");

miVentana.addEventListener("keydown", (context) => {
    // TOKEN
    if (context.key === "ArrowRight") {
        token.style.left = parseInt(token.style.left) + 10 + "px";
    }

    if (context.key === "ArrowLeft") {
        token.style.left = parseInt(token.style.left) - 10 + "px";
    }

    if (context.key === "ArrowUp") {
        token.style.top = parseInt(token.style.top) - 10 + "px";
    }

    if (context.key === "ArrowDown") {
        token.style.top = parseInt(token.style.top) + 10 + "px";
    }

    // lucia

    if (context.key === "D") {
        lucia.style.left = parseInt(lucia.style.left) + 10 + "px";
    }

    if (context.key === "A") {
        lucia.style.left = parseInt(lucia.style.left) - 10 + "px";
    }

    if (context.key === "W") {
        lucia.style.top = parseInt(lucia.style.top) - 10 + "px";
    }

    if (context.key === "S") {
        lucia.style.top = parseInt(lucia.style.top) + 10 + "px";
    }

    // INTERCAMBIAR 
    
});

