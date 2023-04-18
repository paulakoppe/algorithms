let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('a soma é: ' + sum)
alert('a subtração é: ' + sub)
alert('a multiplicação é: ' + multi)
alert('a divisão é: ' + div)
alert('o resto da divisão é: ' + restDiv)