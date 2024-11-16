// Cree una función con dos argumentos que devolverán una matriz de la primera n múltiplos de x.

// Supongamos que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

// Devuelva los resultados como una matriz o lista (según el idioma).

// Ejemplos
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

const countBy = (x, n) => {
  let z = [];

  if (x == 0) {
    return "ingrese un numero mayor a 0";
  } else {
    for (let i = 1; i < n + 1; i++) {
      z.push(x*i);
      console.log(i);
    }
  }
  return z;
};

//Version mejorada
const countBy2 = (x, n) => {
  if (x <= 0 || n <= 0) {
    throw new Error("Los números deben ser mayores que 0");
  }

  return Array.from({ length: n }, (_, i) => x * (i + 1));
};

console.log(countBy(1, 10));
