import React from "react";
import { Container, H1, P } from "./styles";

//JSX
const App = () => {
  const hello = "Hello React"
  return (
    <Container>
      <H1>{hello}</H1>
      <P>Esse é um paragrafo</P>
      <br></br>
      <P>Esse é outro paragrafo</P>

    </Container>
  )
}

export default App