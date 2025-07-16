import UserImage from "../../assets/users.png";
import { TopBackground } from "./styles";
export function DefaultTopBackGround() {
  return (
    <TopBackground>
      <img src={UserImage} alt="imagem-usuarios" />
    </TopBackground>
  );
}
