/*
    Filter
    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array apenas coms os elementos filtrados
    - Aceita 3 parametros
        - item do array
        - index 
        - array completo

        return true -> item atual passa pro novo array
        return false -> item atual não passa pro novo array
*/

const list = [20, 2, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => number > 100)

console.log(newList);