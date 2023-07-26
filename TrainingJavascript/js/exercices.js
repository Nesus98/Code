// Obtenemos el mes actual del sistema (valor entre 0 y 11, donde 0 es enero y 11 es diciembre)
let mesActual = new Date().getMonth();

// Ajustamos el valor para obtener el número real del mes (valor entre 1 y 12)
mesActual = mesActual + 1;

// Verificamos la cantidad de días en el mes actual
let diasEnElMes = 0;

// Verificamos si el mes es febrero (mes 2)
if (mesActual === 2) {
  // Obtenemos el año actual
  const anioActual = new Date().getFullYear();
  
  // Comprobamos si el año es bisiesto para febrero (mes 2)
  if ((anioActual % 4 === 0 && anioActual % 100 !== 0) || anioActual % 400 === 0) {
    diasEnElMes = 29; // Febrero tiene 29 días en años bisiestos
  } else {
    diasEnElMes = 28; // Febrero tiene 28 días en años no bisiestos
  }
} else if (mesActual === 4 || mesActual === 6 || mesActual === 9 || mesActual === 11) {
  diasEnElMes = 30; // Abril (4), Junio (6), Septiembre (9) y Noviembre (11) tienen 30 días
} else {
  diasEnElMes = 31; // Resto de los meses tienen 31 días
}

// Mostramos el resultado en la consola
console.log("El mes " + mesActual + " tiene " + diasEnElMes + " días.");
