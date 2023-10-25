/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container } from "./styles";

export function TextButton({text, ...rest}){
  return(
    <Container {...rest}>
      {text}
    </Container>
  )
}