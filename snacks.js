// ----------------- FUNZIONI ------------------

/**
 * Restituisce le iniziali di un nome completo, in formato "X.Y."
 * Es: "Mario Rossi" → "M.R."
 */
function getInitials(nomeCompleto){
    // Rimuove eventuali spazi multipli e divide il nome
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

/**
 * Converte una stringa in slug: minuscole e spazi sostituiti da trattini
 * Es: "Ciao Mondo" → "ciao-mondo"
 */
function createSlug(str){
    if(!str){
        throw new Error("stringa non valida") // Controllo input non valido
    }
    return str.toLowerCase().replaceAll(" ", "-")
}

/**
 * Calcola la media aritmetica di un array di numeri
 * Lancia un errore se l'array contiene valori non numerici
 */
function average(numeri){
    numeri.forEach(numero => {
        if(isNaN(numero)){
            throw new Error("average vuole solo numeri")
        }
    });
    return numeri.reduce((acc, curr ) => acc + curr, 0) / numeri.length;
}

// Esporta le funzioni per l'utilizzo nei test
module.exports = {
    getInitials,
    createSlug,
    average
}