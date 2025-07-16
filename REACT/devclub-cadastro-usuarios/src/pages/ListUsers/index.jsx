import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../../components";
import { DefaultBackGround } from "../../components/BackGround";
import api from "../../services/api";

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
    <div>
      <DefaultBackGround>
        <h1>List</h1>
        {users.map((user) => (
          <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
          </div>
        ))}
        <DefaultButton onClick={() => navigate("/")}>Voltar</DefaultButton>
      </DefaultBackGround>
    </div>
  );
}
