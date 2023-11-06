import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { BackButton } from "../../components/BackButton";
import { Form } from "../../components/Form";
import { FiUpload } from "react-icons/fi";
import { BiSolidChevronDown } from "react-icons/bi";
import { MySelect } from "../../components/MySelect";
import { Ingredients } from "../../components/Ingredients";
import { TextArea } from "../../components/TextArea";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button"
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

            <label htmlFor="ingredients">Ingredientes</label>

            <section name="ingredients">
              <Ingredients value="Pão Naan" />
              <Ingredients value="Pão Naan" />
              <Ingredients isNew placeholder="Adicionar" />
            </section>

            <label htmlFor="price">Preço</label>
            <Input name="price" placeholder="Ex.: R$ 40,00" />

            <label htmlFor="description">Descrição</label>
            <TextArea
              name="description"
              placeholder="Ex.: Este prato é uma opção refrescante para o verão"
            />

            <Button label="Adicionar prato" className="buttonForm"/>
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
