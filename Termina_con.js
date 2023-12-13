let x = 'abcd'
let y = 'cd'

function solucion(cadena, finalCadena) {
 return cadena.endsWith(finalCadena)
}


function solucion2(cadena, final) {
  if (typeof cadena != "string" || typeof final != "string") throw "wrong type";
  if (final.length > cadena.length) return false;
  return cadena.substr(cadena.length - final.length, final.length) == final;
}

let z = solucion(x,y)
console.log(z)