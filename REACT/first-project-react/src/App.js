import React from "react";
import { Container, H1, Image, Input, InputLabel, ContainerItens, Button } from "./styles";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"

//JSX
const App = () => {

  const users = [
    { id: Math.random(), name: "Pedro", age: 25 },
    { id: Math.random(), name: "Maria", age: 21 },
  ];

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>Cadastrar <img alt="seta" src={Arrow} /></Button>
        <ul>
          {
            users.map(user => (

              <li key={user.id}>
                {user.name} - {user.age}
              </li>
            ))
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App