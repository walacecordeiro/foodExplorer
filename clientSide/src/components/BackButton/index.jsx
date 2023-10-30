import { Container } from "./styles";
import { PiCaretLeftBold } from "react-icons/pi"

export function BackButton(){
  return(
    <Container>
      <PiCaretLeftBold size={22}/>
      voltar
    </Container>
  )
}