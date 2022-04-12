/* JSNACK3

Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */


//dichiaro una variabile in cui inserisco una parola
let myString = 'ciao'

//imposto una funzione che separi le lettere della stringa in un array con metodo split, inverta l'ordine di queste lettere con il metodo reverse e le aggiunga nel nuovo ordine con il metodo join
function reverseString(myString){
 return myString.split("").reverse().join("");
}

//stampo in console il risultato della mia funzione
console.log(reverseString(myString));

