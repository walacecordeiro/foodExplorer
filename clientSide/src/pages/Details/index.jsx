import { Container, Ingredients, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Section } from "../../components/Section";
import dish from "../../assets/img/dish.png";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <BackButton />
          <img src={dish} alt="imagem do prato selecionado" />
          <Section title="Salada Ravanello" gap={2.4} xAlign="center">
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <Ingredients>
              <li>alface</li>
              <li>cebola</li>
              <li>pão naan</li>
              <li>pepino</li>
              <li>rabanete</li>
              <li>tomate</li>
            </Ingredients>
            <Button label="Editar prato" />
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
