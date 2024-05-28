/*
    Map => mapear o nosso array
    - cria um novo array, a partir do array percorrido (original)
    - cria um novo array, com a mesma quantidade de itens do array original
    - aceita 3 parametros
        - item do array
        - index
        - array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + "item");
    console.log(index + "index");
    console.log(arrayOriginal + "array");
    return item * 2
})

console.log(double);

const list = [
    { name: "Pedro", vip: true },
    { name: "Calra", vip: false },
    { name: "Maria", vip: true },
    { name: "João", vip: true },
    { name: "Ana", vip: false },
    { name: "Julio", vip: true },
    { name: "Bruno", vip: false },
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})

console.log(newList);

const students = [
    { name: "Pedro", testGrade: 7 },
    { name: "Calra", testGrade: 5 },
    { name: "Maria", testGrade: 8 },
    { name: "João", testGrade: 9 },
    { name: "Ana", testGrade: 3 },
    { name: "Julio", testGrade: 2 },
    { name: "Bruno", testGrade: 10 },
]

const approve = students.map(student => {
    const approveStudent = {
        name: student.name,
        status: student.testGrade >= 5 ? "Aprovado" : "Reprovado"
    }

    return approveStudent
})

console.log(approve);