import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <div>
        <p>Tudo será renderizado por este arquivo</p>
        <Button label="Meu botão" />
      </div>
      <Footer />
    </Container>
  );
}
