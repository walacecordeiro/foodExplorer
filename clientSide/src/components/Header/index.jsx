import { Container } from "./styles";
import { Logo } from "../Logo";
import { FiMenu } from "react-icons/fi"

export function Header() {
  return (
      <Container>
        <FiMenu width={24} height={18}/>
        <Logo />
      </Container>
  );
}
