/* LIVE jsnack1

Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */


//creo un array con 10 oggetti che rappresentano una zucchina

const zucchine = [
{
 varieta:'faenza',
 peso:20,
 lunghezza:15

},

{
    varieta:'faenza',
    peso:20,
    lunghezza:17
   
},
{
    varieta:'faenza',
    peso:45,
    lunghezza:13
   
},
{
    varieta:'faenza',
    peso:40,
    lunghezza:10
   
},
{
    varieta:'faenza',
    peso:32,
    lunghezza:15
   
},
{
    varieta:'faenza',
    peso:32,
    lunghezza:15
   
},
{
    varieta:'faenza',
    peso:50,
    lunghezza:12
   
},
{
    varieta:'faenza',
    peso:40,
    lunghezza:12
   
},
{
    varieta:'faenza',
    peso:25,
    lunghezza:20
   
},
{
    varieta:'faenza',
    peso:10,
    lunghezza:25
   
}
]

//devo calcolare la somma del peso di tutte le zucchine

let sum = 0;
zucchine.forEach((zucchina) => {
/* console.log(zucchina.peso) */
let peso = zucchina.peso
sum += peso
})

console.log(sum)