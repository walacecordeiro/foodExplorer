import { Container } from "./styles";
import logo from "../../assets/img/logo.svg"

export function Logo(){
  return (
    <Container>
      <img src={logo} alt="" />
      <h2>
        food explorer <span>admin</span>
      </h2>
    </Container>
  );
}