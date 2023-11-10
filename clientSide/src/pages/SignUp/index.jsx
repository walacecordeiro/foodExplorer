/* eslint-disable no-unused-vars */
import { useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }
  return (
    <Container>
      <Logo $width={43} $height={43} />
      <Form>
        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button label="Criar conta" onClick={handleSignUp} />
      </Form>
      <Link to="/">Já tenho uma conta</Link>
    </Container>
  );
}
