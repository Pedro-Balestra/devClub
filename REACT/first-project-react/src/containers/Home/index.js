import React, { useState, useRef } from "react";
import { Container, Image, Input, InputLabel, Button } from "./styles";
import People from "../../assets/people.svg"
import Arrow from "../../assets/arrow.svg"
import axios from "axios"
import { useHistory } from "react-router-dom";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";


//JSX
const App = () => {

  //const users = [];
  //ESTADO => variavel
  //REACT HOOKS => FERRAMENTAS AUXOLIARES
  //Um estado no react é IMUTAVEL

  const [users, setUser] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser() {
    const { data: newUser } = await axios.post('http://localhost:3001/users', {
      name: inputName.current.value, age: inputAge.current.value
    })
    console.log(newUser);
    setUser([...users, newUser])
    history.push("/usuarios")

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

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
      </ContainerItens>
    </Container>
  )
}

export default App