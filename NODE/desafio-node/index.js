const express = require('express')
const uuid = require('uuid')
const port = 8080
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const listOrder = []

const checkOrderId = (request, reponse, next) => {
    const { id } = request.params
    const index = listOrder.findIndex(order => order.id === id);
    if (index < 0) {
        return reponse.status(404).json({ message: 'Order not found' })
    }
    request.orderId = id
    request.orderIndex = index

    next()

}

app.post('/order', (request, reponse) => {
    const { clientName, price, order } = request.body
    const orders = { id: uuid.v4(), clientName, order, price, status: "Em preparação" }

    listOrder.push(orders)

    reponse.status(201).json(orders)
})

app.get('/order/:id?', (request, response) => {
    const { id } = request.params
    //Verifico se foi passado um ID
    if (id) {
        const order = listOrder.find(order => order.id === id); //Verifico se ID esta presente no banco de dados
        if (order) {
            response.status(200).json(order);
        } else {
            response.status(404).json({ message: "Order not found" }); // Se não mostro erro
        }
    } else {
        response.status(200).json(listOrder); //Se ID não foi passado, listo todos os pedidos
    }
})

app.patch('/order/:id', checkOrderId, (request, response) => {
    const index = request.orderIndex;

    listOrder[index].status = "Concluido";
    return response.json(listOrder[index]);
});

app.put('/order/:id', checkOrderId, (request, response) => {
    const index = request.orderIndex;
    const id = request.orderId
    const { clientName, price, order } = request.body
    const updatedOrder = { id, clientName, order, price, status: listOrder[index].status }

    if (listOrder[index].status === "Concluido") {
        response.status(400).json({ message: "Pedido já finalizado não é possivel alterar" });
    }
    else {
        listOrder[index] = updatedOrder
    }
    return response.json(updatedOrder);
})

app.delete('/order/:id', checkOrderId, (request, response) => {
    const index = request.orderIndex

    listOrder.splice(index, 1)
    return response.status(204).send()
})

app.listen(port, () => {
    console.log(`API up on port ${port}`)
})