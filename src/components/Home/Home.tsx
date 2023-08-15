import React from "react";
import * as S from "../../styles";
import { BurgerData } from "../../BurgerData";
import BurgerList from "./BurgerList";

const Home = () => {
  const [burgerList, setBurgerList] = React.useState([...BurgerData]);
  const [selectedBurger, setSelectedBurger] = React.useState(burgerList[0]);
  const [isScreenSmall, setIsScreenSmall] = React.useState(false);

  const checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 1615);
  };

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <S.HomeContainer>
      <S.FlexContainer>
        <S.Background>
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
          <BurgerList
            burgerList={burgerList}
            setSelectedBurger={setSelectedBurger}
            selectedBurger={selectedBurger}
            setBurgerList={setBurgerList}
            isScreenSmall={isScreenSmall}
          />
        </S.Background>
        {!isScreenSmall && <S.ImageHome src={selectedBurger.src}></S.ImageHome>}
      </S.FlexContainer>
    </S.HomeContainer>
  );
};

export default Home;
