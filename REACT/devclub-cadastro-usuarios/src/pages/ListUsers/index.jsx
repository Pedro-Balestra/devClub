import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Trash from "../../assets/trash.svg";
import {
  DefaultButton,
  DefaultTitle,
  DefaultTopBackGround,
} from "../../components";
import { DefaultBackGround } from "../../components/BackGround";
import api from "../../services/api";
import { AvatarUser, CardUsers, ContainerUsers, TrashIcon } from "./style";

export function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Toda vez que a tela carrega,o useEffect é executado
  // Toda vez que uma determinada variável é alterada, o useEffect é executado
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);
  return (
    <DefaultBackGround>
      <DefaultTopBackGround />
      <DefaultTitle>Lista de usuarios</DefaultTitle>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?=username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="icone-lixo" />
          </CardUsers>
        ))}
      </ContainerUsers>
      <DefaultButton onClick={() => navigate("/")}>Voltar</DefaultButton>
    </DefaultBackGround>
  );
}
