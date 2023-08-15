import React from "react";
import * as S from "../styles";

import logo from "../assets/logos/mainlogo.jpeg";

const Navbar = () => {
  return (
    <S.Nav>
      <S.MainLogo src={logo} alt="logo" />
      <S.NavList>
        <S.NavItem>
          <a href="#menu">Cardapio</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#localization"> Localização</a>
        </S.NavItem>
        <S.NavItem>
          <a href="#fazerpedido"> Fazer Pedido</a>
        </S.NavItem>
      </S.NavList>
    </S.Nav>
  );
};

export default Navbar;
