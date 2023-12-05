
//Te pide elevar al cuadrado cada dígito de un número y concatenarlos. Por ejemplo, si ejecutamos 9119 a través de la función, saldrá 811181, porque 92 es 81 y 12 es 1. (81-1-1-81)

let x = 2112

function squareDigits(num) {
  let a = num.toString().split('').map(Number)
  for (let i = 0; i < a.length; i++) {
    a[i] = Math.pow(a[i],2)
  }
  a = a.toString().split(',')
  let res = []
  for (const element of a) {
    res += element
  }
  return parseInt(res)
}

function squareDigits2(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

let z = squareDigits(x)
console.log(z)
