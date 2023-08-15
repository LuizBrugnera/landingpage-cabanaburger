import React from "react";
import * as S from "../styles";

import logo from "../assets/logos/mainlogo.jpeg";

const Navbar = () => {
  const [isScreenSmall, setIsScreenSmall] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };
  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 1000);
  };

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <S.Nav>
      <S.MainLogo src={logo} alt="logo" />

      {isScreenSmall ? (
        <>
          <S.MobileIcon onClick={changeOpen}>
            <S.MobileLine />
            <S.MobileLine />
            <S.MobileLine />
          </S.MobileIcon>
          {open && (
            <S.MobileNavList onClick={changeOpen}>
              <S.MobileNavItem>
                <S.MobileAncor
                  href="https://www.google.com/maps/search/-28.39140087075494,+-51.84680120430696?sa=X&ved=2ahUKEwifxY6m696AAxVopZUCHV8mCn4Q8gF6BAgQEAA&ved=2ahUKEwifxY6m696AAxVopZUCHV8mCn4Q8gF6BAgREAI"
                  target="_blank"
                  rel="noreferrer"
                >
                  Localização
                </S.MobileAncor>
              </S.MobileNavItem>
              <S.MobileNavItem>
                <S.MobileAncor
                  href="https://api.whatsapp.com/send?phone=555496836588&text=Ola%20quero%20fazer%20um%20pedido!"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fazer Pedido
                </S.MobileAncor>
              </S.MobileNavItem>
              <S.MobileNavItem>
                <S.MobileAncor
                  href="https://www.instagram.com/cabanahamburguer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </S.MobileAncor>
              </S.MobileNavItem>
            </S.MobileNavList>
          )}
        </>
      ) : (
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
      )}
    </S.Nav>
  );
};

export default Navbar;
