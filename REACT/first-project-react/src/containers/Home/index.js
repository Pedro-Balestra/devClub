import React, { useState, useRef } from "react";
import { Container, H1, Image, Input, InputLabel, ContainerItens, Button } from "./styles";
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"
import axios from "axios"


//JSX
const App = () => {

  //const users = [];
  //ESTADO => variavel
  //REACT HOOKS => FERRAMENTAS AUXOLIARES
  //Um estado no react é IMUTAVEL

  const [users, setUser] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {
    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value, age: inputAge.current.value
    })
    console.log(newUser);
    setUser([...users, newUser])


  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button to="/usuarios" onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
      </ContainerItens>
    </Container>
  )
}

export default App