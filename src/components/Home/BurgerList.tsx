import React from "react";
import * as S from "../../styles";

export interface Burger {
  index: number;
  selected: boolean;
  name: string;
  price: string;
  src: string;
  ingredients: string[];
  extras?: string[];
}

interface BurgerListProps {
  burgerList: Burger[];
  setSelectedBurger: (burger: Burger) => void;
  setBurgerList: (burgerlist: Burger[]) => void;
  selectedBurger: Burger;
  isScreenSmall: boolean;
}

const BurgerList = ({
  burgerList,
  setSelectedBurger,
  selectedBurger,
  setBurgerList,
  isScreenSmall,
}: BurgerListProps) => {
  const handleBurgerClick = (clickedBurger: Burger) => {
    const updatedBurgerListWithSelection = burgerList.map((burger) =>
      burger.index === clickedBurger.index
        ? { ...burger, selected: true }
        : { ...burger, selected: false }
    );

    setBurgerList(updatedBurgerListWithSelection);
    setSelectedBurger(clickedBurger);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        selectedBurger.index + 1 < burgerList.length
          ? selectedBurger.index + 1
          : 0;
      setSelectedBurger(burgerList[nextIndex]);

      const updatedBurgerListWithSelection = burgerList.map((burger) =>
        burger.index === nextIndex
          ? { ...burger, selected: true }
          : { ...burger, selected: false }
      );
      setBurgerList(updatedBurgerListWithSelection);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [selectedBurger, burgerList, setSelectedBurger, setBurgerList]);
  return (
    <>
      <S.BurgerList>
        {burgerList.map((burger) =>
          burger.selected ? (
            <S.BurgerListItemSelectioned key={burger.index}>
              {burger.name}
            </S.BurgerListItemSelectioned>
          ) : (
            <S.BurgerListItem
              key={burger.index}
              onClick={() => handleBurgerClick(burger)}
            >
              {burger.name}
            </S.BurgerListItem>
          )
        )}
      </S.BurgerList>

      <S.MenuContainer>
        <p>
          {selectedBurger.name} - {selectedBurger.price}
        </p>
        <p>Ingredientes</p>
        <p>{selectedBurger.ingredients.join(", ")}</p>
        {selectedBurger.extras && (
          <>
            <p>Extras</p>
            <p>{selectedBurger.extras.join(", ")}</p>
          </>
        )}
        {isScreenSmall && <S.ImageMenu src={selectedBurger.src}></S.ImageMenu>}
      </S.MenuContainer>
    </>
  );
};

export default BurgerList;
