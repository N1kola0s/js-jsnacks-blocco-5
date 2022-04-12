/* JSNACK3

Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */

let myString = 'ciao'

function reverseString(myString){
 return myString.split("").reverse().join("");
}

console.log(reverseString(myString));

