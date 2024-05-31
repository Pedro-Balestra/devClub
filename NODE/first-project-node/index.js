const express = require('express')
const port = 3000

const app = express()

/*
    - Query params => neusite.com/users?name=pedro&age=25 //Filtros
    - Route params => /users/2 //Buscar, Deletar ou atualizar algo especifico
*/

app.get('/users/:id', (request, response) => {

    const { id } = request.params
    return response.json(
        {
            id
        }
    )
})
/*
app.get('/users', (request, response) => {

    const name = request.query.name
    const age = request.query.age
    
const { name, age } = request.query  // Destructuring assignment
return response.json(
    {
        name,
        age
    }
)
})
*/

app.listen(port, () => {
    console.log(`🚀Server is running on port ${port}`)
})