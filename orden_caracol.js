// Dado un n x n array, devuelva los elementos de la matriz dispuestos desde los elementos más externos al elemento medio, viajando en sentido horario.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// Para una mejor comprensión, siga los números de la siguiente matriz consecutivamente:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


const snail = (array) => {
    const resultado = [];

    while (array.length) {
      // Lado superior (de izquierda a derecha)
      resultado.push(...array.shift());

      // Lado derecho (de arriba a abajo)
      for (let i = 0; i < array.length; i++) {
        resultado.push(array[i].pop());
      }

      // Lado inferior (de derecha a izquierda)
      if (array.length) {
        resultado.push(...array.pop().reverse());
      }

      // Lado izquierdo (de abajo a arriba)
      for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i].shift());
      }
    }

    return resultado;
}

console.log(snail(array));