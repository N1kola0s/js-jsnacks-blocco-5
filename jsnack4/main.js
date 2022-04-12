/* SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const arreyOne = ['a','b','c'];

const arreyTwo = [1,2,3];


/* const arreyThree = [...arreyOne, ...arreyTwo];
console.log(arreyThree); */

//Scrivi una funzione che fonda due array

function mergeArrays(arreyOne, arreyTwo){

    //imposto condizione che controlli che i due array abbiano lo stesso numero di elementi

    if(arreyOne.length === arreyTwo.length){


        //dichiaro in una variabile un terzo array vuoto
        let arreyThree = [];

        //imposto un ciclo in cui per ogni elemento del primo array pushato nel nuovo array pushi anche un elemento del secondo array
    
        arreyOne.forEach((element, index) => {
    
            arreyThree.push(element);
            arreyThree.push(arreyTwo[index]);
        })
    
        return arreyThree;
    
    }


}

//stampo in console la funzione
console.log(mergeArrays(arreyOne, arreyTwo));



