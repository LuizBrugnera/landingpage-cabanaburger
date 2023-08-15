import styled, { createGlobalStyle } from "styled-components";
import backgroundLogo from "./assets/background/backgroundlogo.png";
export const theme = {
  colors: {
    primary: "#333131",
    secondary: "#800000",
    background: "#FFFFFF",
    backgroundNav: "black",
    navColor: "#FFFFFF",
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
  height: 85vh;
  width: 100%;

  @media (max-width: 615px) {
    justify-content: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 7rem;
  text-align: start;

  @media (max-width: 1615px) {
    justify-content: center;
    gap: 5rem;
    flex-direction: column;
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

export const ImageHome = styled.img`
  height: 80%;
  width: auto;
  border-radius: 20%;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 20rem;
    width: 20rem;
  }
`;

export const BackgroundBlack = styled.div`
  background-color: ${theme.colors.background};
  padding: 2 0rem;
`;
