

/* Función para imprimir números impares */

function printOdds(limit) {

    for (let i = 1; i <= limit; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds(20);


/* Función para imprimir números impares decreciendo hasta llegar al cero*/

function decreasing(limit) {
    for (let i = limit; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

decreasing(100);


/* Función para imprimir secuencia de números decreciente */

function secuenceDecreasing(start, end) {

    if (start > end) {
        for (let i = start; i >= end; i -= 1.5) {

            console.log(i);

        }
    } else {
        console.log("Debes ingresar un número mayor y luego un número menor para hacer una secuencia decreciente")
    }
}

secuenceDecreasing(4, -4);

/* Función para imprimir sumatoria total del rango de números ingresado */

function sigma(start, end) {
    let total = 0;

    for (let i = start; i <= end; i++) {
        total += i;
    }

    console.log(total);
}

sigma(1, 100);


/* Función para imprimir multiplicación total del rango de números entre el 1 y el límite ingresado  */


function factorial(limit) {
    let factorial = 1;
    for (let i = 1; i <= limit; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

factorial(12);