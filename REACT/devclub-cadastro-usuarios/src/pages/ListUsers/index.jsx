import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../../components";
import { DefaultBackGround } from "../../components/BackGround";

export function ListUsers() {
  const navigate = useNavigate();
  return (
    <div>
      <DefaultBackGround>
        <h1>ListUsers</h1>
        <DefaultButton onClick={() => navigate("/")}>Voltar</DefaultButton>
      </DefaultBackGround>
    </div>
  );
}
