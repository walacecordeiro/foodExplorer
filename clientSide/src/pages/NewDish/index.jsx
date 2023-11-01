import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Form } from "../../components/Form";
import { FiUpload } from "react-icons/fi";
import { BiSolidChevronDown } from "react-icons/bi";
import { MySelect } from "../../components/MySelect";
import { TextArea } from "../../components/TextArea";
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
            <Input type="file" accept="image/*" name="img" icon={FiUpload} />

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

            <label htmlFor="dishIngredients">Ingredientes</label>
            <Input id="dishIngredients" placeholder="Ex.: Salada Ceasar" />

            <label htmlFor="dishDescription">Ingredientes</label>
            <TextArea id="dishDescription" placeholder="Ex.: Este prato é uma opção refrescante para o verão" />

          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
