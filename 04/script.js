let student = prompt("Qual é o nome do(a) aluno(a)?")
let nota1 = prompt("Qual foi a nota da primeira prova?")
let nota2 = prompt("Qual foi a nota da segunda prova?")
let nota3 = prompt("Qual foi a nota da terceira prova?")

let average = (Number(nota1) + Number(nota2) + Number(nota3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average +  "Ps: você não fez mais do que a sua obrigação")
} else if (average < 3) {
    alert("imbecil, reprovou.")
}
else {
    alert(student + " seu idiota, estude para sua prova de recuperação! Sua média foi de: " +  average)
}