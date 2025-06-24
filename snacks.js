
// ----------------- FUNZIONI ------------------

// Snack 1: Funzione che restituisce le iniziali (es. "Mario Rossi" -> "M.R.")
function getInitials(nomeCompleto){
    // Dividiamo la stringa in un array filtrando gli spazi multipli
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    // Prendiamo la prima lettera di nome e cognome, le convertiamo in maiuscolo e formattiamo con il punto
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

// Snack 2: Funzione che restituisce la versione minuscola di una stringa
function createSlug(str){
    return str.toLowerCase().replaceAll(" ", "-")
}

// Snack 3: Funzione che calcola la media aritmetica di un array di numeri
function average(numeri){
    // Verifichiamo che ogni elemento dell'array sia un numero
    numeri.forEach(numero => {
        if(isNaN(numero)){
            throw new Error("average vuole solo numeri")
        }
    });
    // Calcoliamo la somma totale e dividiamo per il numero di elementi
    return numeri.reduce((acc, curr ) => acc + curr, 0) / numeri.length;
}

// Esportiamo le funzioni per poterle usare nei test
module.exports = {
    getInitials,
    createSlug,
    average
}