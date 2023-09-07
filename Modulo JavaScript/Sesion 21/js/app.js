// function compare(value1,value2){
//     console.log("working!");
// if (value1 < value2) {
//     return-1;
// }else if(value1 > value2){
//     return 1;
// }else{
//     return 0;
// }
// }

// let numbers = [0,1,5,10,15];
// let copyOfNumbers = [...numbers]
// let secondCopyOfNumbers = Array.from(numbers); 

// copyOfNumbers.reverse();

// console.log(numbers);

// console.log(copyOfNumbers);

// console.log(secondCopyOfNumbers);

// secondCopyOfNumbers.sort()

// console.log(secondCopyOfNumbers);

// let team = ["Alice","Sebastian","Ismael","Juan","David Miró","David Calero",];
// team.sort()
// console.log(team);

// secondCopyOfNumbers.sort(compare);

// unorderedNumbers.sort(compare);

// console.log(secondCopyOfNumbers);

// let unorderedNumbers = [20,-8,3,3,102,43,18];
// let counter = 0;
// unorderedNumbers.sort(
//     function(value1,value2){
//         counter++;
        // console.log("value1: ",value1);
        // console.log("value2: ",value2);
        // console.log("result: ",value1 - value2);
//         return value1 - value2;
//     }
// )



// console.log(counter);
// console.log(unorderedNumbers);
// unorderedNumbers.sort(
//     (value1,value2)=> value2 - value1
//     );
//     console.log(unorderedNumbers);





// let result = compare(4,3);
// console.log(result);

// compare (2,3);

// function numAleatorio(min,max){
//     console.log(Math.floor(Math.random() * ( max - min + 1)) + min);
// }
// numAleatorio(1,7);
// numAleatorio(111,7111);

// for (let index = 0; index < 20; index++) {
//     numAleatorio(4,7)
// }

// Traditional methods for ordering arrays
// let numbers = [3, 9, 8, 1, 4];
// for (let i = 0; i < numbers.length - 2; i++) {
// console.log(numbers);
// for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
// if (numbers[j] > numbers[j + 1]) {
// aux = numbers[j];
// numbers[j] = numbers[j + 1];
// numbers[j + 1] = aux;
// }
// }
// }
// console.log(numbers);

// for (const num of numbers) {
//     console.log(num);
// }


//Recorrer carro de la compra

// let shoppingCart = {
//     product1: {
//         id: 1,
//         name: "trainers",
//         price: 29.95,
//         quantity: 1
//     },
//     product2: {
//         id: 2,
//         name: "suitcase",
//         price: 109.95,
//         quantity: 1
//     },
//     product3: {
//         id: 3,
//         name: "glovers",
//         price: 9.95,
//         quantity: 1
//     },
//     product4: {
//         id: 4,
//         name: "t-shirt",
//         price: 29.95,
//         quantity: 1
//     }
// }
// for(let key in shoppingCart) {
//     console.log(shoppingCart[key]. );
// }


// let hero = {
//     character: "Iron Man",
//     name: "Tony Stark"
// }

// for (const key in hero) {
//     console.log(`${key} => ${hero[key]}`);
// }


// ["Aragorn", "Gandalf", "Nazgul"].forEach((element,index,array) => {
//     console.log(`${element} is at index ${index} in ${array}`);
//     return 0;
// });

// [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
//     console.log(letter);
// });

// let numbers = [1, 2, 3];
// let mappedNumbers = numbers.map(
//     numbers => numbers * 2
// );
// console.log(mappedNumbers);

// let filteredNumbers = numbers.filter(numbers => numbers < 3);
// console.log(filteredNumbers);

// console.log(
//     numbers.every(numbers => numbers > 2)
// );
// console.log(
//     numbers.some(numbers => numbers > 2)
// );


// let totalSum = numbers.reduce((accum, number)=> accum + number, 0);
// console.log(totalSum);
// totalSum = 0;
// totalSum = numbers.reduceRight((accum, number)=> accum + number, 0);
// console.log(totalSum);

// let calendar = new Array(5)
// for (let i = 0; i < calendar.length; i++) {
//     calendar[i] = new Array(7)
// }console.log(calendar);

// for (let row = 0, day = 1; row < calendar.length; row++) {
//         for (let col = 0; col < calendar[row].length; col++) {
//             if (day < 31) {
//                 calendar[row][col] =day++;
//             }else if(day == 31){
//                 calendar[row][col] =day;
//                 day = 1;
//             }
//         }
// }

// console.log(calendar);

// function sayHello(moment, name){
//     console.log(`Hi, good ${moment}, ${name}! `);
//     return name.length;
// }

// let letters = 0;
// letters = sayHello("morning","Antonio");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("night","Pablo");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("afternoon","Alina");
// console.log(`Your name has ${letters} letters`);
// letters = sayHello("evening","Fran");

// const sum = function (num1,num2) {
//     return num1 + num2;
// };
// const sum2 = (num1,num2) => num1 + num2;
// console.log(sum(2,2));
// console.log(sum(1,3));
// console.log(sum(0,4));
// console.log(sum2(11,11));


//PROGRAMACION ORIENTADA A OBJETOS

// class Villains { }

// class Avengers {
// constructor(character, name) {
// this.character = character
// this.name = name
// this.powers = [];
// this.bio = ""
// }
// set power(newPower) {
// this.powers.push(newPower)
// }
// get power() {
// console.log(this.powers.join(","))
// }
//  }

// ironMan = new Avengers(
//         "Iron Man",
//         "Toy Stark",
//         )
// ironMan.power = "Flight"
// ironMan.power = "Artificial Intelligence"
// ironMan.power = "Armored Suit"
// ironMan.power = "Super Strength + Durability"


// Ejercicio: crea una clase llamada User, que define un constructor que recibe un parametro, dni. A continuacion añade los setters y getters para el nombre y el email .
// Crea un objeto, dale un nombre y un email y muestralo por consola



class User {
        constructor(dni) {
        this.userDni = dni;
        this.userEmail = "";
        this.userName = "";
}
set name(newName) {
this.name.push(newName);
}
set email(newEmail) {
this.email.push(newEmail);
}
get name() {
console.log(this.userName);
}
get email() {
console.log(this.userEmail)
}
        }
        
        let people = new User("88778R");
        people.userName = "Jesus";
        people.userEmail = "correo@correo";
        console.log(people.userDni);
        console.log(people.userName);
        console.log(people.userEmail);
