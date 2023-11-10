/* eslint-disable no-unused-vars */
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  const data = useAuth();
  
  return (
    <Container>
      <Logo $width={43} $height={43} />
      <Form>
        <label htmlFor="email">Email</label>
        <Input id="email" placeholder="Exemplo: exemplo@exemplo.com" />

        <label htmlFor="password">Senha</label>
        <Input id="password" placeholder="No mínimo 6 caracteres" />

        <Button label="Entrar" />
      </Form>
      <Link to="/cadastrar">Criar uma conta</Link>
    </Container>
  );
}
