import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Image, Order, ContainerOrder, StyledP } from './styles'
import OrderImage from '../../assets/logo-orders.svg'
import Trash from '../../assets/trash.svg'
import H1 from '../../components/Title'
import Button from '../../components/Button'
import axios from 'axios'



const Orders = () => {
    const [orders, setOrder] = useState([]);

    const history = useHistory()

    useEffect(() => {
        async function fectchUsers() {
            const { data: newUser } = await axios.get('http://localhost:8080/order')

            setOrder(newUser)
        }
        fectchUsers()
    }, [orders])

    async function deleteOrder(orderId) {
        await axios.delete(`http://localhost:8080/order/${orderId}`)
        const newOrder = orders.filter(order => order.id !== orderId)
        setOrder(newOrder)
    }

    function goBackPage() {
        history.push("/")
    }
    return (
        <Container>
            <Image alt="logo-order" src={OrderImage}></Image>
            <H1>Pedidos</H1>
            <ul>
                {
                    orders.map(order => (

                        <Order key={order.id}>
                            <ContainerOrder>
                                <p>{order.order}</p> <StyledP>{order.clientName}</StyledP>
                            </ContainerOrder>
                            <button onClick={() => deleteOrder(order.id)}><img alt="lata-de-lixo" src={Trash}></img></button>
                        </Order>
                    ))
                }
            </ul>
            <Button onClick={goBackPage} isBack={true}>Voltar </Button>
        </Container >
    )
}

export default Orders