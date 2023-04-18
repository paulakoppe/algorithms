
const pacients = [
    {
        name: "Lucas",
        age: 22,
        weight: 107.4,
        height: 1.73,
    },
    {
        name: "Gaia",
        age: 2,
        weight: 5.7,
        height: 0.90,
    },
    {
        name: "Paula",
        age: 25,
        weight: 62.5,
        height: 1.75,
    },
]

let patientsNames = []

for (let patient of pacients) {
    patientsNames.push(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem ${patient.height}m de altura`)

}

alert(patientsNames)

