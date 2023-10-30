import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Form } from "../../components/Form";
import { FiUpload } from "react-icons/fi";
import { BiSolidChevronDown } from "react-icons/bi";
import { MySelect } from "../../components/MySelect";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

export function NewDish() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <BackButton />
          <h2>Adicionar prato</h2>
          <Form>
            <label htmlFor="img">Imagem do prato</label>
            <Input
              name="img"
              icon={FiUpload}
              placeholder="Selecione imagem para altera-la"
            />

            <label htmlFor="dishName">Nome</label>
            <Input name="dishName" placeholder="Ex.: Salada Ceasar" />

            <label htmlFor="dishCategory">Categoria</label>

            <MySelect>
              <select name="dishCategory" id="">
                <option value="opt1">Refeição</option>
                <option value="opt2">opt2</option>
                <option value="opt3">opt3</option>
              </select>
              <BiSolidChevronDown />
            </MySelect>

            <label htmlFor="dishName">Nome</label>
            <Input id="dishName" placeholder="Ex.: Salada Ceasar" />
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
