/*
    Reduce
    - Retorna um valor (pode ser um novo array, um objeto, string, number etc..)
    - Aceita 4 parametros
        - acumulador
        - valor atual
        - index
        - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

console.log(sum);

const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.35, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 },
]

const valueCart = cart.reduce((acc, value) => {
    const result = value.pricePerKg * value.kg
    return acc + result
}, 0)

console.log(valueCart);