/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { Input } from "../Input";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container $isVisible={menuIsVisible}>
      <div>
        <AiOutlineClose size={18} onClick={() => setMenuIsVisible(false)} />
        <span>Menu</span>
      </div>
      <div>
        <Input
          id="search"
          icon={GrSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
        <nav>
          <Link to="/novo-prato">Novo prato</Link>
          <a href="#">Sair</a>
        </nav>
      </div>
      
    </Container>
  );
}
