import { Container, Form } from "./styles";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignUp() {
  return (
    <Container>
      <Logo $width={43} $height={43}/>
      <Form>
        <label htmlFor="name">Seu nome</label>
        <Input id="name" placeholder="Exemplo: Maria da Silva" />

        <label htmlFor="email">Email</label>
        <Input id="email" placeholder="Exemplo: exemplo@exemplo.com" />

        <label htmlFor="password">Senha</label>
        <Input id="password" placeholder="No mínimo 6 caracteres" />

        <Button label="Criar conta" />
      </Form>
      <TextButton text="Já tenho uma conta" />
    </Container>
  );
}
