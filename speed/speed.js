let startButton = document.querySelector("input[type='button']")

startButton.addEventListener("click", startGame)

function startGame() {
    // ascunde butonul
    startButton.classList.add("hidden")
    // intervalul este e o secunda (1000ms)
    let interval = 1000
    setInterval(createNewLetter, interval);
}

// genereaza un numar aleatoriu intre min si max (inclusiv)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// genereaza o litera aleatorie mare intre A si Z
function randomLetter() {
    // generam un cod ascii aleatoriu intre 65 si 90
    let codeOfA = "A".charCodeAt(0)
    let codeOfZ = "Z".charCodeAt(0)
    let randomCode = randomNumber(codeOfA, codeOfZ)
    // convertim codul ascii in caracterul asociat lui
    return String.fromCharCode(randomCode)
}

// genereaza o culoare aleatorie
function randomColor() {
    let red = randomNumber(0, 255)
    let green = randomNumber(0, 255)
    let blue = randomNumber(0, 255)
    return `rgb(${red},${green},${blue})`
}

// genereaza o pozitie aleatorie intre 0% si 90%
function randomPosition() {
    let position = randomNumber(0, 90)
    return `${position}%`
}

// creaza un nou element de tip "div" cu o litera aleatorie
// adauga elementul in html
function createNewLetter() {
    let letter = randomLetter()
    let color = randomColor()
    let top = randomPosition()
    let right = randomPosition()
    // cream un nou element div (inital este gol si nu are stil)
    let div = document.createElement("div")
    // adaugam clasa letter elementului nostru
    div.classList.add("letter")
    //  setam textul din interiorul div-ului sa fie aleatorie
    div.innerText = letter
    // setam culoarea css
    div.style.backgroundColor = color
    // setam top si right
    div.style.top = top
    div.style.right = right
    // setam o clasa cu valoarea literei aleatorii
    div.classList.add(letter)
    // adaugam elementul div in body
    document.querySelector("body").appendChild(div)       
}
