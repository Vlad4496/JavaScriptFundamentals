// for(var i = 1; i <= 10; i++) {
//     document.writeln(i + "<br>")
// }

// for(var i = 1; i < 100; i+=2) {
//     document.write(i)
// }

// for(var i = 0; i < 10; i++) {
//     let multiply = i * 7
//     document.write("<br>" + "7" + " x " + i + " = " + multiply)
// }

// for(var i = 0; i <= 10; i++) { 
//     document.write("<br>")
//     for(j = 0; j <= 10; j++) {
//         let multiply = i * j
//         document.write("<br>" + i + " * " + j + " = " + multiply)
//     }
// } 

// for(var i = 1; i <= 10; i++) {
//     let sum = i + 1
//     document.write("<br>" + i + " + " + " 1 " + " = " + sum)
// }
// var prod = 1
// for(var i = 1; i <=10; i++) {
//     prod *= i
//     document.write(prod)
// }

// var sum = 0
// for(var i=12; i < 30; i += 2) {
//     sum += i
// }
// document.write(sum)


var convert = document.querySelector("#button")


convert.addEventListener("click", celsiusToFarenheit)

function celsiusToFarenheit() {
    let converter = document.getElementById("celsius").value 
    let formula = converter * 1.8 + 32
    document.getElementById("farenheit").value = formula

}