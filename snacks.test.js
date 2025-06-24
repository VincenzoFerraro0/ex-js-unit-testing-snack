// Importazione delle funzioni dal modulo snacks.js
const { getInitials, createSlug, average } = require("./snacks.js")

// --------------------- TEST ---------------------

// Test della funzione getInitials: controlla che restituisca correttamente le iniziali di un nome completo
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.")
    expect(getInitials("luigi bianchi")).toBe("L.B.")
    expect(getInitials("Maria  Verdi")).toBe("M.V.") // Doppio spazio gestito correttamente
})

// Test di createSlug: verifica che la stringa venga convertita in minuscolo
test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("CIAO")).toBe("ciao")
})

// Test della funzione average: verifica che la media venga calcolata correttamente
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([10, 10, 50, 30])).toBe(25)
    expect(() => average([5, "ciao"])).toThrow() // Lancia errore con input non numerico
})

// Test di createSlug: verifica che gli spazi vengano sostituiti da trattini
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("CIAO QUESTO è UN TEST")).toBe("ciao-questo-è-un-test")
})

// Funzione di utilità per verificare se una parola è un palindromo
function isPalindrome(parola) {
    const parolaInversa = parola.split('').reverse().join('');
    return parola === parolaInversa
}

// Test di isPalindrome: verifica che riconosca correttamente i palindromi
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('radar')).toBeTruthy()
    expect(isPalindrome('vincenzo')).toBeFalsy()
})

// Test di createSlug: verifica che venga lanciato un errore con input non valido
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("stringa non valida")
    expect(() => createSlug(null)).toThrow("stringa non valida")
})