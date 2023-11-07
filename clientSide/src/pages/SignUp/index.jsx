import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Logo $width={43} $height={43} />
      <Form>
        <label htmlFor="name">Seu nome</label>
        <Input id="name" placeholder="Exemplo: Maria da Silva" />

        <label htmlFor="email">Email</label>
        <Input id="email" placeholder="Exemplo: exemplo@exemplo.com" />

        <label htmlFor="password">Senha</label>
        <Input id="password" placeholder="No mínimo 6 caracteres" />

        <Button label="Criar conta" />
      </Form>
      <Link to="/">
        Já tenho uma conta
      </Link>
    </Container>
  );
}
