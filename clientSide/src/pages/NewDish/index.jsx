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
            <Input type="file" accept="image/*" id="img" icon={FiUpload} />

            <label htmlFor="dishName">Nome</label>
            <Input id="dishName" placeholder="Ex.: Salada Ceasar" />

            <label htmlFor="dishCategory">Categoria</label>

            <MySelect>
              <select id="dishCategory">
                <option value="opt1">Refeição</option>
                <option value="opt2">opt2</option>
                <option value="opt3">opt3</option>
              </select>
              <BiSolidChevronDown />
            </MySelect>

            <label htmlFor="ingredient">Ingredientes</label>

            <section id="ingredient">
              <Ingredients value="Pão Naan" tabIndex="-1"/>
              <Ingredients value="Pão Naan" tabIndex="-1"/>
              <Ingredients isNew placeholder="Adicionar" />
            </section>

            <label htmlFor="price">Preço</label>
            <Input id="price" placeholder="Ex.: R$ 40,00" />

            <label htmlFor="description">Descrição</label>
            <TextArea
              id="description"
              placeholder="Ex.: Este prato é uma opção refrescante para o verão"
            />

            <Button label="Adicionar prato" className="buttonForm" />
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
