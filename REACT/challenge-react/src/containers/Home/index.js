import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Image, InputLabel, Input } from './styles'
import Burger from '../../assets/logo-home.svg'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import ContainerButton from '../../components/Button'
import axios from 'axios'

const App = () => {

  const [orders, setOrder] = useState([]);
  const inputOrder = useRef()
  const inputName = useRef()
  const history = useHistory()

  async function addNewOrder() {
    const { data: newOrder } = await axios.post('http://localhost:8080/order', {
      order: inputOrder.current.value,
      clientName: inputName.current.value
    })
    console.log(newOrder);
    setOrder(...orders, newOrder);
    history.push('/order')
  }

  return (
    <Container>
      <Image alt="logo-home" src={Burger}></Image>
      <H1> Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido"></Input>
        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>
        <ContainerButton onClick={addNewOrder}>Novo Pedido</ContainerButton>
      </ContainerItens>
    </Container>
  )
}

export default App