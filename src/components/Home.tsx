import React from "react";
import * as S from "../styles";

import simples from "../assets/hamburgers/simples.jpeg";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.FlexContainer>
        <S.BackgroundBlack>
          <S.HomeTitle>Cabana Hamburger</S.HomeTitle>
          <S.HomeText>
            Bem-vindo à Cabana Burger, o paraíso dos amantes de hambúrgueres em
            David Canabarro e arredores! Localizada no coração da cidade, a
            Cabana Burger se tornou rapidamente o destino favorito para quem
            busca uma experiência gastronômica única e saborosa. Com uma
            variedade de deliciosos hambúrgueres artesanais, este
            estabelecimento conquistou o paladar de todos aqueles que buscam uma
            combinação perfeita entre qualidade e sabor.
          </S.HomeText>
        </S.BackgroundBlack>
        <S.ImageHome src={simples}></S.ImageHome>
      </S.FlexContainer>
    </S.HomeContainer>
  );
};

export default Home;
