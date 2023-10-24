/* eslint-disable react/prop-types */
import { Container, ContentWrapper } from "./styles";

export function SectionHome({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <ContentWrapper>{children}</ContentWrapper>
    </Container>
  );
}
