/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container } from "./styles";
import { PiPencilSimpleBold } from "react-icons/pi";

export function Dish({ data, ...rest }) {
  return (
    <Container {...rest}>
        <PiPencilSimpleBold size={24} />
        <img src={data.img} alt="" />
        <h3>{data.title}</h3>
        <p>{data.price}</p>
    </Container>
  );
}
