import { Container } from "./styles";
import { Form } from "../../components/Form";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/TextButton";

export function SignIn() {
  return (
    <Container>
      <Logo $width={43} $height={43}/>
      <Form>
        <label htmlFor="email">Email</label>
        <Input id="email" placeholder="Exemplo: exemplo@exemplo.com" />

        <label htmlFor="password">Senha</label>
        <Input id="password" placeholder="No mínimo 6 caracteres" />

        <Button label="Entrar" />
      </Form>
      <TextButton text="Criar uma conta" />
    </Container>
  );
}
