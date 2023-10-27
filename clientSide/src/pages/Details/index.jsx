import { Container, Ingredients } from "./styles";
import { BackButton } from "../../components/BackButton";
import dish from "../../assets/img/dish.png";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
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
    </Container>
  );
}
