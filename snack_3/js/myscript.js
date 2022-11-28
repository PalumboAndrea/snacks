/**
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
 */

const list = [1, 3, 5, 6, 10, 20, 50, 30, 140, 4, 10, 20, 50, 30, 40, 70];

let sum = 0;

for ( let i = 0 ; i < list.length ; i++ ){

    if ( i % 2 === 1 ){
        sum += list[i];
    }
    
}


console.log(sum);





















