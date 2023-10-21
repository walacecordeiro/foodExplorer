import { Container } from "./styles";
import { MenuMobile } from "../MenuMobile";
import { Logo } from "../Logo";
import { FiMenu } from "react-icons/fi"

import { useState } from "react";

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState();

  return (
    <>
      <MenuMobile 
      menuIsVisible={menuIsVisible}
      setMenuIsVisible={setMenuIsVisible}
      />
      <Container>
        <FiMenu width={24} height={18} onClick={() => setMenuIsVisible(true)}/>
        <Logo />
      </Container>
    </>
  );
}
