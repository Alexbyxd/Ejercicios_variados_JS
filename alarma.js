// Escribe una función llamada setAlarm/set_alarm/set-alarm/setalarm (dependiendo del lenguaje) que recibe dos parámetros. El primer parámetro, employed, es cierto cada vez que está empleado y el segundo parámetro, vacation es cierto cada vez que estás de vacaciones.

// La función debe devolver verdadero si usted está empleado y no de vacaciones (porque estas son las circunstancias bajo las cuales usted necesita para establecer una alarma). Debería devolver falso de lo contrario. Ejemplos:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

const setAlarm = (employed, vacation) => {
    return employed && !vacation;
};

console.log(setAlarm(false, false));