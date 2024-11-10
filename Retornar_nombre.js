// Crea una función que responda a la pregunta "Estás jugando al banjo?".
// Si su nombre comienza con la letra "R" o minúscula "r", ¡está jugando al banjo!

// La función toma un nombre como su único argumento, y devuelve una de las siguientes cadenas:

// name + " plays banjo"
// name + " does not play banjo"


let x = 'rodrigo'

function jugandoBanjo(nombre) {
    return nombre.startsWith('R') || nombre.startsWith('r') ? `${nombre} esta tocando el banjo` : `${nombre} no esta tocando el banjo`
}

let z = jugandoBanjo(x)

console.log(z)


function jugandoBanjo2(nombre) {
    return nombre + (nombre[0].toLowerCase() == 'r' ? ' tocando el' : ' no esta tocando el') + " banjo";
}