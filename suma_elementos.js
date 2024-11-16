const digitalRoot = (n) => {
  if (n < 0) {
    return "Invalid input";
  }

  if (n < 10) {
    return n;
  }

  let suma = 0;

  while (n > 0) {
    suma += n % 10;
    n = Math.floor(n / 10);
  }

  return digitalRoot(suma);
};
const digitalRoot2 = (n) => {
  
    return ((n - 1) % 9) + 1;
};


console.log(digitalRoot(12345678));
console.log(digitalRoot2(1345678));
