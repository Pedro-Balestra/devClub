import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserImage from "../../assets/users.png";
import { DefaultBackGround, DefaultButton } from "../../components";
import api from "../../services/api";
import {
  ContainerInputs,
  Form,
  Input,
  InputLabel,
  Title,
  TopBackground,
} from "./styles";
export function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value,
    });
    console.log(data);
  }

  return (
    <DefaultBackGround>
      <TopBackground>
        <img src={UserImage} alt="imagem-usuarios" />
      </TopBackground>
      <Form>
        <Title>Cadastrar usuário</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>
        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input
            type="email"
            placeholder="E-mail do Usuário"
            ref={inputEmail}
          />
        </div>
        <DefaultButton type="button" onClick={registerNewUser} theme="primary">
          Cadastrar usuário
        </DefaultButton>
      </Form>
      <DefaultButton
        type="button"
        onClick={() => navigate("/lista-de-usuarios")}
      >
        Ver lista de usuários
      </DefaultButton>
    </DefaultBackGround>
  );
}

/*
  Exportar "Padrão" -> uma coisa só por pagina
  apenas Exportar -> várias coisas por pagina
*/
