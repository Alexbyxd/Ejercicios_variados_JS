// Su objetivo en este kata es implementar una función de diferencia, que resta una lista de otra y devuelve el resultado.

// Debe eliminar todos los valores de la lista a, que están presentes en la lista b manteniendo su orden.

// arrayDiff([1,2],[1]) == [2]
// Si un valor está presente en b, todas sus ocurrencias deben ser eliminadas del otro:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
    //Set es para eliminar todos los repetidos de una lista
    //Luego se filtra cada elemento de a donde si un elemento x es igual a uno de la lista b, si es asi lo elimina de a y sino lo incluye en el nuevo array
    return a.filter(x => !b.includes(x));
}


console.log(
  arrayDiff(
    [1,2],
    [1]
  )
);