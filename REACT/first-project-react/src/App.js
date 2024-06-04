import React from "react";
import { Container, H1, Image, Input, InputLabel, ContainerItens, Button } from "./styles";

//JSX
const App = () => {

  return (
    <Container>
      <Image />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>Cadastrar</Button>
      </ContainerItens>
    </Container>
  )
}

export default App