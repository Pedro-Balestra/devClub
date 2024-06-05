import React from "react";
import { Container, H1, Image, Input, InputLabel, ContainerItens, Button } from "./styles";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"

//JSX
const App = () => {

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
      </ContainerItens>
    </Container>
  )
}

export default App