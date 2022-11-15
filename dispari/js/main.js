// Richiesta pari o dispari !(ancora senza verifica)
let parolaUser = prompt("pari o dispari?");
console.log("hai scelto", parolaUser);

// Richiesta numero
let numeroUser = parseInt(prompt("scegli un numero da 1 a 5"));
// Range scelta numeri utente
while (
    isNaN(numeroUser) || 
        numeroUser <1 || numeroUser >5
    )
    {
        alert ("Un numero... e sopratutto da 1 a 5");
        numeroUser = parseInt(prompt("scegli un numero da 1 a 5"));
    };

console.log("numero", numeroUser);

// Valore per riconoscere il pari o dispari del prompt dell'utente
let userPoD = 0;

if(parolaUser == "pari"){
    userPoD = 1;
}
else if(parolaUser == "dispari"){
    userPoD = 0;
}

console.log("valore pari [1] o dispari[0] =", userPoD)


// Tutto in una funzione
    // let risultato = scommessa(parolaUser)

    // function scommessa(userInput){
        
    //     let numeroCPU = Math.floor(Math.random() * 5) + 1;
    //     console.log("CPU", numeroCPU);
    //     let somma = (numeroUser + numeroCPU);
    //     console.log("somma", somma)
        
    //     let PariODispari = "0";
        
    //     if(somma % 2 == 0){
    //         PariODispari = 1;
    //     }
    //     else{
    //         PariODispari = 0;
    //     }

    //     if(PariODispari == userPoD){
    //         return "hai vinto!";
    //     }
    //     else{
    //         return "hai perso"
    //     }
    // }

    // console.log(risultato)


// In più funzioni
// dichiaro variabile random collegata alla funzione
let random = numeroRandomCPU(parolaUser)
// Funzione per generare un numero random
function numeroRandomCPU(userInput){
    
    let numeroCPU = Math.floor(Math.random() * 5) + 1;
    console.log("CPU", numeroCPU);
    return numeroCPU;
}

// Sommo il numero dell'utente e il numero randomico
let somma = (numeroUser + random);
    console.log("somma", somma);
    
// Dichiaro variabile per determinare se il risultato è pari  dispari tramite una funzione
let PariODispari = pariDispari(somma);
// Funzione per capire se un numero è pari o dispari
function pariDispari(userInput){

    if(userInput % 2 == 0){
        return 1;
    }
    else{
        return 0;
    }
}

// Dichiaro la variabile del risultato
let risultato = "";
// Se la funzione per il pari/dispari dà come risultato un valore uguale a quello della scelta dell'utente allora si vince
if(PariODispari == userPoD){
        risultato = "hai vinto!";
    }
    else{
        risultato = "hai perso"
    }

// Stampo il risultato su terminale
console.log(risultato)