const pedro = {
    name: "Pedro",
    age: 24,
    address:
    {
        street: "Rua ABC",
        number: 123,
        city: "MG",
        state: "MG",
        country: "Brasil"
    }
}

console.log(pedro)
console.log(pedro.name)
console.log(pedro.address.street)

pedro.address.number = 1

console.log(pedro.address.number)
