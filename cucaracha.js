// La cucaracha es uno de los insectos más rápidos. Escribe una función que tome su velocidad en km por hora y la devuelva en cm por segundo, redondeada al número entero (= floored).

// Por ejemplo:

// 1.08 --> 30
// ¡Nota! La entrada es un número real (el tipo real depende del lenguaje) y es >= 0. El resultado debe ser un entero.

const cucaracha = (s) => {
    return Math.floor(s * 27.77778);
};

console.log(cucaracha(1.08))
