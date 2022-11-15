// Richiesta parola
let parolaUser = prompt("scrivi una parola per verificare se è palindroma");
console.log(parolaUser);
// imposto la costante del risultato e la collego alla funzione
const risultato = palindroma(parolaUser);

// Creo la funzione
// Divido la parola nelle sue lettere per poi ricomporla invertita e verifica se coincide con quella iniziale
    
    function palindroma(userInput){
        // Divido la parola in lettere creando un array
        let worldSplit = userInput.split('');
        console.log(worldSplit);
        // Inverto l'array
        let worldSplitInv = worldSplit.reverse('');
        console.log(worldSplitInv);
        // Rimetto insieme la parola invertita
        let worldInv = worldSplitInv.join('');
        console.log(worldInv);
        // Confronto le due parole e riporto il risultato alla costante "risultato" con return
        if(parolaUser == worldInv){
            return "la parola digitata è palindroma";
          } 
          else {
            return "la parola digitata non è palindroma";
          }
    
    }
// Stampo il risultato su terminale
console.log(risultato);
    



