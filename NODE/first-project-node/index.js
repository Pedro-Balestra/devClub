const express = require('express')
const port = 3000

const app = express()

app.get('/users', (request, response) => {
    return response.send('Hello Node')
})

app.listen(port, () => {
    console.log(`🚀Server is running on port ${port}`)
})