let  x =0;
let y = 0;

// Etiqueta se puede llamar como quieras, sirve para salir de un bucle cuando quieras
antonio: while (true) {
    console.log("Outer loops", x);
    x += 1;
    z = 1;

    while (true) {
        console.log("Inner loops: ", z);

        z +=1;
        
        if (z === 10 && x=== 10) {
            break antonio;
        } else if (z === 10) {
            break;
        }
    }
}

// FOR EACH

// in = muestra índices
// on = muestra lo de dentro

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7