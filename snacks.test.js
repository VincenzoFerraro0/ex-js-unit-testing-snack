// Importiamo le funzioni definite nel file snacks.js
const { getInitials, createSlug, average } = require("./snacks.js")

// Snack 1: Test della funzione getInitials
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    // Test con nome e cognome con maiuscola
    expect(getInitials("Mario Rossi")).toBe("M.R.")
    // Test con lettere minuscole
    expect(getInitials("luigi bianchi")).toBe("L.B.")
    // Test con spazi multipli tra nome e cognome
    expect(getInitials("Maria  Verdi")).toBe("M.V.")
})

// Snack 2: Test della funzione createSlug
test("La funzione createSlug restituisce una stringa in lowercase", () => {
    // Test con stringa in maiuscolo
    expect(createSlug("CIAO")).toBe("ciao")
})

// Snack 3: Test della funzione average
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    // Test con numeri interi
    expect(average([10, 10, 50, 30])).toBe(25)
    // Test con un valore non numerico: deve generare un errore
    expect(() => average([5, "ciao"])).toThrow()
})

// Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () =>{
    expect(createSlug("CIAO QUESTO è UN TEST")).toBe("ciao-questo-è-un-test")
})

//function

function isPalindrome(parola){
    const parolaInversa = parola.split('').reverse().join('');
    return parola === parolaInversa
}

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('radar')).toBeTruthy()
    expect(isPalindrome('vincenzo')).toBeFalsy()
})
