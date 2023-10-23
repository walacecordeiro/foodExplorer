/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Section({ title, gap, xAlign, children }) {
  return (
    <Container gap={gap} xAlign={xAlign}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
