import { Container } from "./styles";
import { Logo } from "../Logo";
import { Input } from "../../components/Input";
import { Button } from "../Button";
import { PiSignOutBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

export function Header() {
  return (
    <Container>
      <Logo />
      <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
      <Button label="Novo prato" />
      <PiSignOutBold />
    </Container>
  );
}
