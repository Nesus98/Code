// let number = 10;
// while (number > 0 ) {
//     number--;
//     console.log(number);
// }


//Generating multiplication tables

// for (let number = 1; number <= 10; number++) {

//     console.log("Tabla del: ", number);
//     console.log("---------------------------");

//     let multi = 1;
//     while (multi <= 10) {
    
//     console.log(number, " x ", multi, " = ", number * multi);
//     multi++;
//      }
//      console.log("---------------------------");
    
// }


//Contar del 0 al 100 y del 100 al 0 hasta llegar a ser iguales
// for (let counter =0, limit = 100;
//     counter <= limit;
//     counter++,limit--) {
    //         console.log(counter, " - ", limit);
    //     }


//Contador del 0 al 10 con pausa en el numero 5
    // let counter = 1;
    // while (counter <= 10)  {
    //     console.log(counter++);
    //     if (counter == 6) {
    //         break;
    //     }
    // }

//Contador del 0 al 100 de 2 en 2
    let counter = 1;
    while (counter++ <= 100) {
        if (counter % 2 != 0) {
            continue;
        }
        console.log(counter++);
    }