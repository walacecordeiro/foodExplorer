import { Container, Ingredients, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
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
          <div>
            <h2>Salada Ravanello</h2>
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
          </div>
          <Button label="Editar prato" />
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
