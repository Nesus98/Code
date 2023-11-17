//Ejercicios algoritmos 2 

// 1. Ejercicio: Escribe un programa para contar las letras en la palabra: palindrome, mostrándolas una a una.

const exercise1 = () => {
    let word ="palindrome";
    console.log(word.length);
    [...word].forEach(letter=>{
        console.log(letter);
    })
};
 exercise1();

 //2. Escribe un programa que muestre las letras del palíndromo “no lemon, no melon en orden inverso

 const exercise2 = () => {
    let palindrome = "no lemon, no melon";
    let reverse = [...palindrome].reverse()
    console.log(reverse.join(""));
    };
    exercise2();

//3. 3. EjercicioEscribe un programa para mostrar un cuadrado de asteriscos de 4x4.

const exercise3 = () => {
    let result = "";
    let rows = 4;
    let columns = 4;
    for (let index = 0; index < rows; index++) {
    for (let index = 0; index < columns; index++) {
        result += "*"
    }
    result += "\n";
     }
    console.log(result);
};
exercise3();

//4 Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). Acontinuación, muestra cuál ha sido la temperatura media.


// Temperaturas de los últimos 7 días
const temperaturas = [22, 25, 23, 20, 26, 24, 21];

// Calcula la temperatura media
const temperaturaMedia = temperaturas.reduce((total, temperatura) => total + temperatura, 0) / temperaturas.length;


// // Muestra la temperatura media en la consola
// console.log(`La temperatura media de los últimos 7 días es: ${temperaturaMedia} grados Celsius.`);

// 5. Ejercicio
// Escribe una función con el nombre “stringManager”, que recibirá 2 parámetros: un string,
// introducido por el usuario a través del prompt(), y un segundo parámetro, que será un objeto con las
// funciones a realizar. Genera un Lorem50 desde VS Code para probar el ejercicio.
// El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt(). A continuación,
// mediante un menú de consola, preguntará al usuario las siguientes opciones:
// • Replace chars by signs?
// • Capitalize?
// • Replace spaces with commas?
// La primera opción reemplazará de la siguiente forma:
// • a → @
// • e → 3
// • i → 1
// • o → 0
// • s → $

// La segunda opción pondrá la primera letra de cada palabra en mayúscula, y la tercera cambiará los
// espacios por comas. No puede haber 2 comas seguidas.
// El menú aceptará únicamente y para sí o n para no. Almacenará las respuestas en un objeto con las
// propiedades: replaceChars, capitalize y replaceSpaces, cuyos valores asociados serán booleanos.
// La salida del programa deberá mostrar el string original, y a continuación el string con cada una de
// las modificaciones requeridas. Un ejemplo con todas las opciones marcadas como true:
// • Lorem ipsum dolor sit amet
// • L0r3m 1p$um d0l0r $1t @m3t
// • Lorem Ipsum Dolor Sit Amet
// • Lorem,ipsum,dolor,sit,amet
// ** El programa deberá registrar el tiempo de realización, es decir, desde que comienza el proceso de
// transformación del string hasta que termina. Después de los string requeridos, el programa mostrará
// las siguientes líneas: **
// • 5 words, 25 chars
// • work done in 750 miliseconds

// function stringManager(inputString, operations) {
//     // Registro de tiempo de inicio
//     const startTime = Date.now();

//     // Verifica si el primer parámetro es un string
//     if (typeof inputString !== "string") {
//         console.error("El primer parámetro debe ser un string.");
//         return;
//     }

//     // Verifica si el segundo parámetro es un objeto
//     if (typeof operations !== "object") {
//         console.error("El segundo parámetro debe ser un objeto con funciones.");
//         return;
//     }

//     // Almacena las respuestas del usuario
//     const userResponses = {
//         replaceChars: false,
//         capitalize: false,
//         replaceSpaces: false
//     };

//     // Pregunta al usuario las opciones y almacena las respuestas
//     for (const operation in operations) {
//         if (operations.hasOwnProperty(operation) && typeof operations[operation] === "function") {
//             const respuestaUsuario = prompt(`¿Desea ${operation}? (y/n)`);
//             userResponses[operation] = respuestaUsuario.toLowerCase() === 'y';
//         }
//     }

//     // Realiza las operaciones definidas en el objeto
//     for (const operation in userResponses) {
//         if (userResponses.hasOwnProperty(operation) && userResponses[operation] && operations[operation]) {
//             inputString = operations[operation](inputString);
//         }
//     }

//     // Registro de tiempo de finalización
//     const endTime = Date.now();

//     // Muestra los resultados
//     console.log("String original:");
//     console.log(inputString);

//     for (const operation in userResponses) {
//         if (userResponses.hasOwnProperty(operation) && userResponses[operation] && operations[operation]) {
//             console.log(`Resultado después de ${operation}:`);
//             console.log(inputString);
//         }
//     }

//     // Muestra las líneas finales
//     console.log(`• ${inputString.split(' ').length} words, ${inputString.length} chars`);
//     console.log(`• work done in ${endTime - startTime} miliseconds`);
// }

// // Funciones de transformación
// const replaceCharsBySigns = str => {
//     const replacements = { 'a': '@', 'e': '3', 'i': '1', 'o': '0', 's': '$' };
//     return str.replace(/[aeios]/g, match => replacements[match] || match);
// };

// const capitalize = str => {
//     return str.replace(/\b\w/g, match => match.toUpperCase());
// };

// const replaceSpacesWithCommas = str => {
//     return str.replace(/\s\s+/g, ',').replace(/\s/g, ',');
// };

// // Ejemplo de uso:
// const usuarioInput = prompt("Introduce un string:");
// const operaciones = {
//     "Replace chars by signs": replaceCharsBySigns,
//     "Capitalize": capitalize,
//     "Replace spaces with commas": replaceSpacesWithCommas
// };

// stringManager(usuarioInput, operaciones);


