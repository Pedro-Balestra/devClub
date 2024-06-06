import React, { useState, useRef, useEffect } from "react";
import { Container, H1, Image, Input, InputLabel, ContainerItens, Button, User } from "./styles";
import People from "./assets/people.svg"
import Arrow from "./assets/arrow.svg"
import Trash from "./assets/trash.svg"
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
  //  UseEffect (Efeito Colateral)
  // A minha aplicação inicia (A pagina carregou, useEffect é chamado)
  // Quando um estado que esta no array de dependencia do useEffect é alterado
  useEffect(() => {
    async function fectchUsers() {
      const { data: newUser } = await axios.get('http://localhost:3001/users')

      setUser(newUser)
    }
    fectchUsers()
  }, [users])

  function deleteUser(userId) {
    const newUser = users.filter(user => user.id !== userId)
    setUser(newUser)
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
        <ul>
          {
            users.map(user => (

              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}><img alt="lata-de-lixo" src={Trash}></img></button>
              </User>
            ))
          }
        </ul>
      </ContainerItens>
    </Container>
  )
}

export default App