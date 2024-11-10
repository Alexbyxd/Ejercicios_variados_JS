// Función de escritura RemoveExclamationMarks que elimina todos los signos de exclamación de una cadena dada.

const removeExclamationMarks = (s) => {
  console.log(s);
  return s.replace(/!/g, "");
};

console.log(removeExclamationMarks("Hello World!"));

// Devuelve el número (conteo) de vocales en la cadena dada.

// Consideraremos a, e, i, o, u como vocales para este Kata (pero no y).

// La cadena de entrada solo consistirá en letras minúsculas y/o espacios.

const getCount = (s) => {
  console.log(s);
  return (s.match(/[aeiou]/gi) || []).length;
};

console.log(getCount("Hello World!"));
