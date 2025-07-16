import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../../components";
import { DefaultBackGround } from "../../components/BackGround";
import api from "../../services/api";

export function ListUsers() {
  const navigate = useNavigate();

  // Toda vez que a tela carrega,o useEffect é executado
  // Toda vez que uma determinada variável é alterada, o useEffect é executado
  useEffect(() => {
    async function getUsers() {
      const data = await api.get("/usuarios");
      console.log(data);
    }
    getUsers();
  }, []);
  return (
    <div>
      <DefaultBackGround>
        <h1>ListUsers</h1>
        <DefaultButton onClick={() => navigate("/")}>Voltar</DefaultButton>
      </DefaultBackGround>
    </div>
  );
}
