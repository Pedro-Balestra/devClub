import { Button, Container, ContainerInputs, Form, Input, InputLabel, Title, TopBackground } from "./styles";


export function Home() {

  return (
    <Container>
      <TopBackground>
        <img />
      </TopBackground>
      <Form>
        <Title>Cadastrar usuário</Title>
        <ContainerInputs>
          <div>
            <div>
              <InputLabel>Nome<span>*</span></InputLabel>
              <Input type="text" placeholder='Nome do Usuário' />

            </div>
            <div>
              <InputLabel>Idade <span>*</span></InputLabel>
              <Input type="number" placeholder="Idade do Usuário" />

            </div>
          </div>
          <div>
            <InputLabel>E-mail <span>*</span></InputLabel>
            <Input type="email" placeholder="E-mail do Usuário" />
          </div>
        </ContainerInputs>
        <Button>Cadastrar usuário</Button>
      </Form>
    </Container>
  )
}

/*
  Exportar "Padrão" -> uma coisa só por pagina
  apenas Exportar -> várias coisas por pagina
*/