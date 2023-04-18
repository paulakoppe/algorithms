// const patients = [
//     {
//         name: "Lucas",
//         age: 22,
//         weight: 107.4,
//         height: 1.73,
//     },
//     {
//         name: "Gaia",
//         age: 2,
//         weight: 5.7,
//         height: 0.72,
//     },
//     {
//         name: "Paula",
//         age: 25,
//         weight: 62.5,
//         height: 1.75,
//     },
// ]



// const calcIMC = (patient) => {
//     alert(`${patient.name} possui o IMC de ${(patient.weight/(patient.height ** 2)).toFixed(1)}`)
// }

// for (let patient of patients) {
//     calcIMC(patient)
// }
const delay = ms => new Promise(res => setTimeout(res, ms));



const funcaoAsync = async () => {
    delay(50000)
    console.log('executando....')
}


funcaoAsync().then(() => {
    console.log('...executou')
})