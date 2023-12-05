//Dado un número integral, determine si es un número cuadrado:
//En matemáticas, a número cuadrado o plaza perfecta es un número entero que es el cuadrado de un número entero; en otras palabras, es el producto de algún número entero consigo mismo.

let x = 4

function esRaiz(x) {
    let a = false
    for (let i = 0; i <= x; i++) {
        if (i*i===x) {
            a = true;
            break;
        } 
    }
    return a
}

function esRaiz2(n) {
  return Math.sqrt(n) % 1 === 0;
}

let z = esRaiz(25)
console.log(z)