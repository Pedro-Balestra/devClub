import React, { useState, useEffect } from "react";
import { Container, Image, Button, User } from "./styles";
import Avatar from "../../assets/avatar.svg"
import Arrow from "../../assets/arrow.svg"
import Trash from "../../assets/trash.svg"
import axios from "axios"
import { useHistory } from "react-router-dom";
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";

//JSX
const Users = () => {

  //const users = [];
  //ESTADO => variavel
  //REACT HOOKS => FERRAMENTAS AUXOLIARES
  //Um estado no react é IMUTAVEL

  const [users, setUser] = useState([]);
  const history = useHistory()

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

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUser = users.filter(user => user.id !== userId)
    setUser(newUser)
  }

  function goBackPage() {
    history.push("/")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>
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
        <Button onClick={goBackPage} ><img alt="seta" src={Arrow} />Voltar </Button>
      </ContainerItens>
    </Container>
  )
}

export default Users