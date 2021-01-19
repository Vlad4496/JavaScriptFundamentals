let output = document.getElementById("text")
let button = document.getElementById("button")

let number = Math.floor(Math.random() * 100)

button.addEventListener("click", function() {
    let input = document.getElementById("inputText").value;
    if (input == number) {
        output.innerHTML = `You guessed right, your number was ${number}`
    } else if (input < number) {
        output.innerHTML = `Too low`
    } else if (input > number) {
        output.innerHTML = `Too high`
    } else {
        output.innerHTML = `Wrong`
    }
    
})

