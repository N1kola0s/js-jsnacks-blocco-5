/* SNACK 4
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

const arreyOne = ['a','b','c'];

const arreyTwo = [1,2,3];


/* const arreyThree = [...arreyOne, ...arreyTwo];
console.log(arreyThree); */

function mergeArrays(arreyOne, arreyTwo){

    if(arreyOne.length === arreyTwo.length){

        let arreyThree = [];
    
        arreyOne.forEach((element, index) => {
    
            arreyThree.push(element);
            arreyThree.push(arreyTwo[index]);
        })
    
        return arreyThree;
    
    }


}

console.log(mergeArrays(arreyOne, arreyTwo));



