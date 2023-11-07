import { Container } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi";

export function BackButton() {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <Container onClick={handleGoBack}>
      <PiCaretLeftBold size={22} />
      voltar
    </Container>
  );
}
