let result = prompt("Adivinhe o número que estou pensando! Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)
const match = Number(result) == randomNumber

console.log(result, randomNumber, match)

let xAttempts = 1;

while(Number(result) != randomNumber) {
    result = prompt("idiota, tente de novo:")
    xAttempts++
}

alert("parabéns uhu otimo, vc só errou " + xAttempts + " vezes")