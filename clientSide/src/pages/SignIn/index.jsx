/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password});
  }

  return (
    <Container>
      <Logo $width={43} $height={43} />
      <Form>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="Exemplo: exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button label="Entrar" onClick={handleSignIn}/>
      </Form>
      <Link to="/cadastrar">Criar uma conta</Link>
    </Container>
  );
}
