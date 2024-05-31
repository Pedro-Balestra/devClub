const express = require('express')
const uuid = require('uuid')
const port = 3000

const app = express()
app.use(express.json())

/*
    - Query params => neusite.com/users?name=pedro&age=25 //Filtros
    - Route params => /users/2 //Buscar, Deletar ou atualizar algo especifico

    - Get          => Buscar informação no back-end
    - Post         => Cria informação no back-end
    - Put / Patch  => Alterar/Atualizar informação no back-end
    - Delete       => Deletar informação no back-end

    - Middleware   => Interceptador => Tem o poder de parar ou alterar dados da requisição
*/

const users = []

const checkUserId = (request, response, next) => {
    const { id } = request.params
    const index = users.findIndex(user => user.id === id)
    if (index < 0) {
        return response.status(404).json({ error: 'User not found' })
    }
    request.userIndex = index
    request.userId = id

    next()
}

app.get('/users', (request, response) => {
    return response.json(
        users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body
    const user = {
        id: uuid.v4(), name, age
    }
    users.push(user)
    return response.status(201).json(user)
})

app.put('/users/:id', checkUserId, (request, response) => {

    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId

    const updatedUser = { id: id, name, age }



    users[index] = updatedUser
    return response.json(
        updatedUser)
})

app.delete('/users/:id', checkUserId, (request, response) => {
    const index = request.userIndex

    users.splice(index, 1)
    return response.status(204).send()
})





app.listen(port, () => {
    console.log(`🚀Server is running on port ${port}`)
})