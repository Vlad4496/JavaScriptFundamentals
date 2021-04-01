document.querySelector("input[type='button']")
        .addEventListener("click", crypt)

function crypt() {
    let text = document.querySelector('textarea').value
    let cypher = document.querySelector('input[type="number"]').value

    let encryptedText = encrypt(text, cypher)

    document.querySelector("#result").innerText = encryptedText
}

function encrypt(text, cypher) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let encryptedAlphabet = shift(alphabet, cypher)
    let letterMap = mapAlphabet(alphabet, encryptedAlphabet)
    let encryptedText = text.split("")
                            .map(letter => letterMap[letter])
                            .join("")
    return encryptedText
}

function shift(alphabet, cypher) {
    let firstCut = alphabet.slice(0, 2)
}