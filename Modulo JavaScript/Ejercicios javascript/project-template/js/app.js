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
    let rows = 5;
    let columns = 10;
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


