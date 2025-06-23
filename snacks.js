// Snack 1 

function getInitials(nomeCompleto){
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

// Snack 2
function createSlug(str){
    return str.toLowerCase()
}


module.exports = {
    getInitials,
    createSlug
}