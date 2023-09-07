// // EJERCICIO 1


// // Obtenemos el mes actual del sistema (valor entre 0 y 11, donde 0 es enero y 11 es diciembre)
// let mesActual = new Date().getMonth();

// // Ajustamos el valor para obtener el número real del mes (valor entre 1 y 12)
// mesActual = mesActual + 1;

// // Verificamos la cantidad de días en el mes actual
// let diasEnElMes = 0;

// // Verificamos si el mes es febrero (mes 2)
// if (mesActual === 2) {
//   // Obtenemos el año actual
//   const anioActual = new Date().getFullYear();
  
//   // Comprobamos si el año es bisiesto para febrero (mes 2)
//   if ((anioActual % 4 === 0 && anioActual % 100 !== 0) || anioActual % 400 === 0) {
//     diasEnElMes = 29; // Febrero tiene 29 días en años bisiestos
//   } else {
//     diasEnElMes = 28; // Febrero tiene 28 días en años no bisiestos
//   }
// } else if (mesActual === 4 || mesActual === 6 || mesActual === 9 || mesActual === 11) {
//   diasEnElMes = 30; // Abril (4), Junio (6), Septiembre (9) y Noviembre (11) tienen 30 días
// } else {
//   diasEnElMes = 31; // Resto de los meses tienen 31 días
// }

// // Mostramos el resultado en la consola
// console.log("El mes " + mesActual + " tiene " + diasEnElMes + " días.");

// console.log("_______________________________________________-");

//EJERCICIO 2


// // Preguntamos al usuario el mes
// let mesIngresado = prompt("Ingresa un mes (por ejemplo: enero, febrero, marzo, ...):");

// // Convertimos el mes ingresado a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
// mesIngresado = mesIngresado.toLowerCase();

// // Inicializamos la variable que almacenará la cantidad de días en el mes ingresado
// let diasEnElMes = 0;

// // Verificamos cuántos días tiene el mes ingresado
// switch (mesIngresado) {
//   case "enero":
//   case "marzo":
//   case "mayo":
//   case "julio":
//   case "agosto":
//   case "octubre":
//   case "diciembre":
//     diasEnElMes = 31;
//     break;
//   case "abril":
//   case "junio":
//   case "septiembre":
//   case "noviembre":
//     diasEnElMes = 30;
//     break;
//   case "febrero":
//     // Obtenemos el año actual
//     const anioActual = new Date().getFullYear();
    
//     // Comprobamos si el año es bisiesto para febrero (mes 2)
//     if ((anioActual % 4 === 0 && anioActual % 100 !== 0) || anioActual % 400 === 0) {
//       diasEnElMes = 29; // Febrero tiene 29 días en años bisiestos
//     } else {
//       diasEnElMes = 28; // Febrero tiene 28 días en años no bisiestos
//     }
//     break;
//   default:
//     console.log("That’s not a real month!");
//     break;
// }

// // Mostramos el resultado en la consola si el mes es válido
// if (diasEnElMes > 0) {
//   console.log("El mes " + mesIngresado + " tiene " + diasEnElMes + " días.");
// }


//EJERCICIO 3 


// // Preguntamos al usuario la temperatura exterior
// let temperaturaExterior = prompt("Ingresa la temperatura exterior en grados Celsius:");

// // Convertimos el valor ingresado a un número
// temperaturaExterior = parseFloat(temperaturaExterior);

// // Verificamos la temperatura y mostramos la alerta con el mensaje correspondiente
// if (temperaturaExterior < 15) {
//   alert("Warm up");
// } else if (temperaturaExterior >= 15 && temperaturaExterior <= 25) {
//   alert("Enjoy the weather!");
// } else {
//   alert("Cool down");
// }


//EJERCICIO 4

// // Variable centinela para controlar el semáforo (true: verde, false: rojo)
// let isGreen = true;

// // Verificamos el estado del semáforo y mostramos el mensaje correspondiente
// if (isGreen) {
//   console.log("Cross the road");
// } else {
//   console.log("Please await");
// }


//EJERCICIO 5

// let temperature = "Boiling Point";
// switch (temperature) {
//   case "Absolute Zero":
//     console.log((-273.15 * 9) / 5 + 32);
//     break;
//   case "Freezing Point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body Temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling Point":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
//     break;
// }



//EJERCICIO 6 


// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";

// let userEmail = prompt("Please, enter your email");
// let userPassword = prompt("Please, enter your password");
// if (email == userEmail && password == userPassword) {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }



//EJERCICIO 7


// let money = 500;
// let convertTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   // break;
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   // break;
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   // break;
//   case "francs":
//     console.log(`The value of ${money} in swiss francs is: `, money * franc);
//   // break;
//   default:
//     console.log("You don't have all that money!");
//     break;
// }

// // Evaluating califications
// let calification = prompt("Please, enter your calification:");
// // nota por debajo de 5 failure
// // 5 => passed
// // 6 => well
// // 7 y 8 => remarkable
// // 9 y 10 => outstanding
// // solution (with switch)
// switch (parseInt(calification)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log("failure");
//     break;
//   case 5:
//     console.log("passed");
//     break;
//   case 6:
//     console.log("well");
//     break;
//   case 7:
//   case 8:
//     console.log("remarkable");
//     break;
//   case 9:
//   case 10:
//     console.log("outstanding");
//     break;
//   default:
//     console.log("out of range");
//     break;
// }



//EJERCICIO 8


// // Preguntamos al usuario los 2 números y la operación a realizar
// let numero1 = parseFloat(prompt("Ingresa el primer número:"));
// let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
// let operacion = prompt("Ingresa la operación a realizar (suma, resta, multi, divide):");

// // Variable para almacenar el resultado de la operación
// let resultado;

// // Realizamos la operación seleccionada
// switch (operacion) {
//   case "suma":
//     resultado = numero1 + numero2;
//     break;
//   case "resta":
//     resultado = numero1 - numero2;
//     break;
//   case "multi":
//     resultado = numero1 * numero2;
//     break;
//   case "divide":
//     resultado = numero1 / numero2;
//     break;
//   default:
//     console.log("Operación no válida");
// }

// // Mostramos el resultado en la consola si la operación es válida
// if (resultado !== undefined) {
//   console.log("El resultado de la operación " + operacion + " es: " + resultado);
// }



// // //EJERCICIO 9

// // // Fran solution

// let userNieDni = prompt("Please, write your DNI or NIE");

// if (userNieDni.length == 9) {
//   let firstCharacter = userNieDni.charCodeAt(0);
//   let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
//   //if NIE
//   if (
//     (firstCharacter == 84 || firstCharacter == 88) &&
//     !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your NIE is valid");
//   }
//   // if DNI
//   else if (
//     !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your DNI is valid");
//   } else {
//     console.log("Your DNI or NIE is not valid");
//   }
// } else {
//   console.log("Your DNI or NIE is not valid");
// }

//EJERCICIO 10


// // Exercise 10
// // Setting max and min possible values
// let max = 6;
// let min = 1;
// // Generating a random number between max and min
// // Jorge solution
// let randomNumber1 = (Math.floor(Math.random() * 10) % 6) + 1;
// //let randomNumber1 = Math.floor(Math.random() * max) + min;
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//   console.log("Player 1 wins!");
// } else if (randomNumber1 < randomNumber2) {
//   console.log("Player 2 wins!");
// } else {
//   console.log("Draw");
// }






//SESION 20

// let option = null;
// let colors =["red","green","blue",];

// do {
//   console.log("Please, choose a color");
//   for (let index = 0; index < colors.length; index++) {
//   console.log(index + 1 + "." + colors[index]);
//   }
//   console.log("Press 0 to leave");
//   option = prompt("Make your choice")
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red: #FF0000", "color: rgb(44, 199, 116);");
//       break;
//     case "2":
//       console.log("%cHex code for green: #008000", "color: rgb(44, 199, 116);");
//       break;
//     case "3":
//       console.log("%cHex code for blue: #0000FF", "color: rgb(44, 199, 116);");
//       break;
  
//     default:
//     if (option != 0) {
//       console.warn("Not a valid option, please try again.");
//     }else{
//       console.log("Exiting, see you soon");
//     }
//       break;
//   }
// } while (option != 0);