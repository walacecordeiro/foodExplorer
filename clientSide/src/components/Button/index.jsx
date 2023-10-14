/* eslint-disable react/prop-types */

// Importa o componente 'Container' do arquivo 'styles.js'
import { Container } from "./styles";

// Define um componente funcional chamado 'Button'.
export function Button({ label, loading = false, icon, ...rest }) {
  // O componente aceita as seguintes propriedades:
  // 'label': Rótulo do botão.
  // 'loading': Um valor booleano opcional (padrão: false) que indica se o botão está em um estado de carregamento.
  // '...rest': Outras propriedades que podem ser passadas para o 'Container'.
  return (
    // Renderiza um elemento 'Container' como um botão.
    <Container type="button" disabled={loading} {...rest}>
      {icon}
      {loading ? "carregando..." : label}
    </Container>
  );
}
