// //Determinar tipo de dato y valor de las variables
// //caso a
// let variable = 838 < 542;
// console.log("a) tipo:",typeof variable, "valor: ", variable);

// //caso b
// variable = 17 / 5;
// console.log("b) tipo:",typeof variable, "valor: ", variable);

// //caso c
// variable = 12 * 6
// console.log("c) tipo:",typeof variable, "valor: ", variable);

// //caso d
// variable = 35 % 8
// console.log("d) tipo:",typeof variable, "valor: ", variable);

// //caso e
// variable = 1 == 3 || 5 > 7 || 10*5 > 40
// console.log("e) tipo:",typeof variable, "valor: ", variable);

// //caso f
// variable = 13 % 2 == 0 
// console.log("f) tipo:",typeof variable, "valor: ", variable);

// // //caso g
// variable = "CODE" + " " + "SPACE;"
// console.log("g) tipo:",typeof variable, "valor: ", variable);

// // //caso h
// variable = (21 / 2) % 3
// console.log("h) tipo:",typeof variable, "valor: ", variable);

// // //caso i
// variable = 5 == "5"
// console.log("i) tipo:",typeof variable, "valor: ", variable);

// // //caso j
// variable = !(1 == 1)
// console.log("j) tipo:",typeof variable, "valor: ", variable);

// let isLogged = true;
// let isAdmin = true;
// let isOlderThan17 = false;

// console.log("Con or:",(isLogged||isAdmin||isOlderThan17));
// console.log("Con and:",(isLogged&&isAdmin&&isOlderThan17) == false);

// let totalBet = prompt("Please enter your bet");

// if (totalBet == 5000) {
// alert("All in!");
// } else if(totalBet < 5000 ){
//     alert("Passing this round.");
// } else{
//     while(totalBet > 5000) {
//     totalBet = prompt("Please enter your bet");
//     if (totalBet < 5000) {
//         alert("Wrong bet, try again");
//     }
// }
// }

/*Obtener fecha completa para el dia en curso */
//   const fechaDeHoy = new Date();
//   /*El mes de 0 a 1 (0 - Enero y 11 - Diciembre) */
//   let month = fechaDeHoy.getMonth();
//   //Obtener el nombre del mes
//   let monthName = []
//   /*El dia del mes en curso (entre 1 y 31) */
//   let today = fechaDeHoy.getDate();
//   /*El año con 4 digitos */
//   let year = fechaDeHoy.getFullYear();
//   /*El dia de la semana (0 para el domingo, 6 para el sabado) */
//   let dayOfWeek = fechaDeHoy.getDay();
//   /*La hora entre 0 y 23 */
//   let hour = fechaDeHoy.getHours();
//   /*Los minutos entre 1 y 59 */
//   let minutes = fechaDeHoy.getMinutes();
// /*Mostrar por la consola la hora y los minutos */
//   console.log(hour, ":", minutes);
// let day = today;

// //Si el dia tiene menos de 2 digitos le pongo un 0 delante
// if(day < 10){
//     day = "0"+day;
// }
// console.log(day);
// //Le sumamos 1 al mes para que coincida con el sistema de meses teniendo en cuenta que por defecto Enero = 0 y Diciembre = 11
// month = month + 1;
// //Si el mes tiene menos de 2 digitos le pongo un 0 delante
//   if(month < 10){
//     month = "0"+ month;
//   }

//   console.log(month);
//   console.log(year);

//   //Concatenamos cadena de caracteres con las variables, para formar la fecha completa
//   let fullDate = hour + ":"+minutes+" "+day+"/"+month+"/"+year;

//   console.log("Today's date and time:");
//   console.log(fullDate);

//   //Obtener temporada del año con un Alert

//   if (month == 3 || month == 4 || month == 5){
//     alert("Spring");
//   } else if(month == 6 || month == 7 || motnh == 8){
//     alert("Summer");
//   }else if(month == 9 || month == 10 || motnh == 11){
//     alert("Autumn");
//   } else if(month == 12 || month == 1 || motnh == 2){
//     alert("Winter");
//   }else{
//     console.log("Please, use a valid month");
  

  //Solucion 2
//   if (month >= 12 && month <3){
//     console.log("winter");
//   } else if (month >=3 && month < 6) {
//     console.log("Spring");
//   } else if (month >= 6 && month < 9){
//     console.log("Summer");
//   } else {
//     console.log("Autumn");
//   }

// let character = "Black Widow";

// switch (character) {
// case "Captain America":
// power = "Indestructible shield";
// break;
// case "Black Widow":
// power = "Master spy & assassin";
// break;
// case "Iron Man":
// power = "Genius-level intellect";
// break;
// case "Thor":
// power = "The hammer of Thor";
// break;
// default:
// console.log("Choose your hero!");
// break;
// }
// console.log(power);
 

//Solucion 1

// function seleccionarLenguaje(){ 
//   const idioma = prompt("Selecciona un lenguaje (en | de | pt | po):");

// switch(idioma) {
//   case "en":
//     console.log("Language is English, execute code for English.");
//     break;
//   case "de":
//     console.log("Language is German, execute code for German.");
//     break;
//   case "pt":
//     console.log("Language is Portuguese, execute code for Portuguese.");
//      break;
//   case "po":
//     console.log("Language is Polish, execute code for Polish.");
//      break;
//      default:
//       console.log("Language is not chosen, using Spanish.");
        
//           }
//         }
// seleccionarLenguaje();


//solucion 2

let lenguaje = prompt("Selecciona un lenguaje entre en | de | pt | po");
let answer;

switch(lenguaje) {
  case "en":
    answer = "Language is English, execute code for English.";
    break;
  case "de":
    answer = "Language is German, execute code for German.";
    break;
  case "pt":
    answer = "Language is Portuguese, execute code for Portuguese.";
     break;
  case "po":
    answer = "Language is Polish, execute code for Polish.";
     break;
     default:
      answer = "Language is not chosen, using Spanish.";
        
          }
        
console.log(answer);

let count = 10;
for(let i = 0; i < count; i++){
  console.log(i);
}