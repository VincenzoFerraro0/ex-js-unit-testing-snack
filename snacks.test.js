// Importazione delle funzioni dal modulo snacks.js
const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snacks.js")

// --------------------- TEST ---------------------


describe('Manipolazione Stringhe', () => {
    // Snack 1
    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInitials("Mario Rossi")).toBe("M.R.")
        expect(getInitials("luigi bianchi")).toBe("L.B.")
        expect(getInitials("Maria  Verdi")).toBe("M.V.") // Doppio spazio gestito correttamente
    })

    // Snack 5
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome('radar')).toBeTruthy()
        expect(isPalindrome('vincenzo')).toBeFalsy()
    })


})


describe('Operazioni su Array', () => {
    // Snack 3
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([10, 10, 50, 30])).toBe(25)
        expect(() => average([5, "ciao"])).toThrow() // Lancia errore con input non numerico
    })


    const posts = [
        { id: 1, title: "articolo numero 1", slug: "articolo-numero-1" },
        { id: 2, title: "articolo numero 2", slug: "articolo-numero-1" }
    ]

    // Snack 7
    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "articolo numero 2", slug: "articolo-numero-1" })
        expect(findPostById(posts, 3)).toEqual(null)
        expect(() => findPostById(posts, "test")).toThrow("l'id deve essere un numero")
        expect(() => findPostById([3, 5], 2)).toThrow("il formato non è valido")
    })

})

describe('Generazione di slug', () => {

    // Snack 2
    test("La funzione createSlug restituisce una stringa in lowercase", () => {
        expect(createSlug("CIAO")).toBe("ciao")
    })

    // Snack 4
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug("CIAO QUESTO è UN TEST")).toBe("ciao-questo-è-un-test")
    })

    // Snack6
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow("stringa non valida")
        expect(() => createSlug(null)).toThrow("stringa non valida")
    })


})