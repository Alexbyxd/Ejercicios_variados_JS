// Esta vez no hay historia, no hay teoría. Los ejemplos a continuación le muestran cómo escribir la función accum:

// Ejemplos:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// El parámetro de accum es una cadena que incluye solo letras de a..z y A..Z.

const accum = (s) => {
  return s.split("").map((v, i) => v.toUpperCase() + v.toLowerCase().repeat(i)).join('-')
}

console.log(accum("adcb"))