import React from "react";
import * as S from "../styles";

import logo from "../assets/logos/mainlogo.jpeg";

const Navbar = () => {
  const [isScreenSmall, setIsScreenSmall] = React.useState(false);

  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 980);
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
          <a
            href="https://www.google.com/maps/search/-28.39140087075494,+-51.84680120430696?sa=X&ved=2ahUKEwifxY6m696AAxVopZUCHV8mCn4Q8gF6BAgQEAA&ved=2ahUKEwifxY6m696AAxVopZUCHV8mCn4Q8gF6BAgREAI"
            target="_blank"
            rel="noreferrer"
          >
            Localização
          </a>
        </S.NavItem>
        <S.NavItem>
          <a
            href="https://api.whatsapp.com/send?phone=555496836588&text=Ola%20quero%20fazer%20um%20pedido!"
            target="_blank"
            rel="noreferrer"
          >
            Fazer Pedido
          </a>
        </S.NavItem>
        <S.NavItem>
          <a
            href="https://www.instagram.com/cabanahamburguer/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </S.NavItem>
      </S.NavList>
    </S.Nav>
  );
};

export default Navbar;
