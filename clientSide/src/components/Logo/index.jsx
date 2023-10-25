/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container } from "./styles";
import logo from "../../assets/img/logo.svg";

export function Logo({ $width = 24, $height = 24, $fSize }) {
  return (
    <Container>
      <img
        src={logo}
        alt="logo do food explorer"
        width={$width}
        height={$height}
      />
      <h2>
        food explorer <span>admin</span>
      </h2>
    </Container>
  );
}
