import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#333131",
    secondary: "#800000",
    background: "#FFFFFF",
    backgroundNav: "black",
    navColor: "#FFFFFF",
    backgroundMenu: "black",
    menuColor: "#FFFFFF",
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lobster', cursive;
    font-family: 'Roboto', sans-serif;
    background-color: ${theme.colors.background};
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    `;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  height: 15vh;
  margin-bottom: 10vh;
  background-color: ${theme.colors.backgroundNav};
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const MainLogo = styled.img`
  height: 6rem;
  width: 6rem;
  background-color: transparent;
  border-radius: 20%;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media (max-width: 800px) {
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  margin-left: 1.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${theme.colors.navColor};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85vh;
  width: 100%;

  @media (max-width: 615px) {
    justify-content: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 7rem;
  text-align: start;

  @media (max-width: 1615px) {
    justify-content: center;
    gap: 5rem;
    flex-direction: column;
  }

  @media (max-width: 990px) {
    align-items: normal;
    padding: 0 2rem;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 4rem;
  background: -webkit-radial-gradient(circle, #800000, #ffa600e1);
  background: -moz-radial-gradient(circle, #800000, #ffa600e1);
  background: -o-radial-gradient(circle, #800000, #ffa600e1);
  background: radial-gradient(circle, #800000, #ffa600e1);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HomeText = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.primary};
  word-spacing: 0.1rem;
  line-height: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 6rem;
  @media (max-width: 1615px) {
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const BurgerList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0 7rem;
  text-align: start;
`;

export const BurgerListItem = styled.li`
  display: inline-block;
  margin-left: 1.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  min-width: 150px;
  cursor: pointer;
  text-align: center;
  transition: opacity 0.5s ease-in-out;
  &:hover {
    color: ${theme.colors.secondary};
  }

  @media (max-width: 990px) {
    font-size: 1.2rem;
    align-items: normal;
    padding: 0 2rem;
    margin-left: 1rem;
    min-width: 90px;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    align-items: normal;
    padding: 0 1rem;
    min-width: 70px;
  }
`;

export const BurgerListItemSelectioned = styled.li`
  display: inline-block;
  margin-left: 1.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  background: -webkit-radial-gradient(circle, #800000, #ffa600e1);
  background: -moz-radial-gradient(circle, #800000, #ffa600e1);
  background: -o-radial-gradient(circle, #800000, #ffa600e1);
  background: radial-gradient(circle, #800000, #ffa600e1);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  min-width: 150px;
  cursor: pointer;
  text-align: center;
  transition: opacity 0.5s ease-in-out;

  @media (max-width: 990px) {
    font-size: 1.2rem;
    align-items: normal;
    padding: 0 2rem;
    margin-left: 1rem;
    min-width: 90px;
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    align-items: normal;
    padding: 0 1rem;
    min-width: 70px;
  }
`;

export const ImageHome = styled.img`
  height: 628px;
  width: 628px;
  border-radius: 20%;
  margin: 0 auto;
  transition: opacity 0.5s ease-in-out;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    height: 20rem;
    width: 20rem;
  }
`;

export const Background = styled.div`
  background-color: ${theme.colors.background};
  padding: 2 0rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  min-height: 400px;
  width: 60%;
  padding: 30px 30px;
  margin: 50px auto;
  text-align: center;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.menuColor};
  border-radius: 20px;
  font-size: 1.6rem;
  font-weight: 600;
  background-image: linear-gradient(to bottom, #0f0101, #000000, #0f0101);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 70%;
    font-size: 1.2rem;
  }
`;

export const ImageMenu = styled.img`
  height: 70%;
  width: 70%;
  border-radius: 20%;
  margin: 0 auto;
  transition: opacity 0.5s ease-in-out;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  margin-top: 20vh;
  background-color: ${theme.colors.backgroundNav};
  color: ${theme.colors.navColor};
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 10px 0 10px 5px rgba(0, 0, 0, 0.5);
`;
