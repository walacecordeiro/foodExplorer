import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { SectionHome } from "../../components/SectionHome";
import { Dish } from "../../components/Dish";
import { Footer } from "../../components/Footer";

import img from "../../assets/img/dish.png";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <SectionHome title="Refeições">
          <Dish
            data={{
              img: [img],
              title: "Salada Ravanello",
              price: "R$ 49,97",
            }}
          />
          <Dish
            data={{
              img: [img],
              title: "Salada Ravanello",
              price: "R$ 49,97",
            }}
          />
          <Dish
            data={{
              img: [img],
              title: "Salada Ravanello",
              price: "R$ 49,97",
            }}
          />
        </SectionHome>
        <SectionHome title="Refeições">
          <Dish
            data={{
              img: [img],
              title: "Salada Ravanello",
              price: "R$ 49,97",
            }}
          />
          <Dish
            data={{
              img: [img],
              title: "Salada Ravanello",
              price: "R$ 49,97",
            }}
          />
          <Dish
            data={{
              img: [img],
              title: "Salada Ravanello",
              price: "R$ 49,97",
            }}
          />
        </SectionHome>
      </Content>

      <Footer />
    </Container>
  );
}
