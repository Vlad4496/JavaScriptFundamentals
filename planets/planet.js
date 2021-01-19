let check = document.getElementById("check")
check.addEventListener("click", function() {
    let redPlanet = document.getElementById("redplanet")
    redPlanet.innerText = "Error Message"
    redPlanet.classList.add("alert")
})

let reset = document.getElementById("reset")
reset.addEventListener("click", function() {
    let redPlanet = document.getElementById("redplanet")
    redPlanet.innerText = "Nothing to report"
    redPlanet.classList.remove("alert")
})