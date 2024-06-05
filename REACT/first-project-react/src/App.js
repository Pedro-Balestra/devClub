import React, { useState } from "react";
import { Container, H1, Image, Input, InputLabel, ContainerItens, Button, User } from "./styles";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"


//JSX
const App = () => {

  //const users = [];
  //ESTADO => variavel
  //REACT HOOKS => FERRAMENTAS AUXOLIARES
  //Um estado no react é IMUTAVEL

  const [users, setUser] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  function addNewUser() {
    setUser([...users, { id: Math.random, name, age }])
  }

  function changeInputName(event) {
    setName(event.target.value)
  }

  function changeInputAge(event) {
    setAge(event.target.value)
  }


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>
        <ul>
          {
            users.map(user => (

              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button><img alt="lata-de-lixo" src={Trash}></img></button>
              </User>
            ))
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App