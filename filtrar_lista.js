
//Crear una función que toma una lista de enteros y cadenas no negativos y devuelve una nueva lista con las cadenas filtradas.


let a = [1,2,'a','asdas','qw',1234]

function filtrar_lista(l) {
    let x = l.filter(function(num) {
        return Number.isInteger(num)
    })
    return x
}

function filtrar_lista2(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

let z = filtrar_lista(a)

console.log(z)