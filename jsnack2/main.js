/* SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

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

    const lunghezzaZucchina_under15 = zucchine.filter((zucchina)=> zucchina.lunghezza < 15)
    console.log(lunghezzaZucchina_under15)

    const lunghezzaZucchina_over15 = zucchine.filter((zucchina)=> zucchina.lunghezza > 15)
    console.log(lunghezzaZucchina_over15)

    //fare la somma dei pesi dei due gruppi di zucchine ricavati dal precedente

    let somma = 0;

    lunghezzaZucchina_under15.forEach((zucchina)=>{

        somma += zucchina.peso
    }) 

    console.log(somma)

    let somma_over15 = 0;

    lunghezzaZucchina_over15.forEach((zucchina)=>{

        somma_over15 += zucchina.peso
    }) 

    console.log(somma_over15);