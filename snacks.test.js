const { getInitials,createSlug  } = require("./snacks.js")

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.")
    expect(getInitials("luigi bianchi")).toBe("L.B.")
    expect(getInitials("Maria  Verdi")).toBe("M.V.")
})



// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase", () => {
    expect(createSlug("CIAO")).toBe("ciao")
})