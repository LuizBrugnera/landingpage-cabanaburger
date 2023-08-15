import React from "react";
import * as S from "../styles";

import logo from "../assets/logos/mainlogo.jpeg";

const Navbar = () => {
  const [isScreenSmall, setIsScreenSmall] = React.useState(false);

  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 800);
  };

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <S.Nav>
      {!isScreenSmall && <S.MainLogo src={logo} alt="logo" />}
      <S.NavList>
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
