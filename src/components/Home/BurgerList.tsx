import React from "react";
import * as S from "../../styles";

export interface Burger {
  index: number;
  selected: boolean;
  name: string;
  price: string;
  src: string;
  ingredients: string[];
}

interface BurgerListProps {
  burgerList: Burger[];
  setSelectedBurger: (burger: Burger) => void;
  setBurgerList: (burgerlist: Burger[]) => void;
  selectedBurger: Burger;
}

const BurgerList = ({
  burgerList,
  setSelectedBurger,
  selectedBurger,
  setBurgerList,
}: BurgerListProps) => {
  const clearBurgerList = () => {
    return burgerList.map((burger) => ({ ...burger, selected: false }));
  };

  const handleBurgerClick = (clickedBurger: Burger) => {
    const updatedBurgerList = clearBurgerList();
    const updatedBurgerListWithSelection = updatedBurgerList.map((burger) =>
      burger.index === clickedBurger.index
        ? { ...burger, selected: true }
        : burger
    );

    setBurgerList(updatedBurgerListWithSelection);
    setSelectedBurger(clickedBurger);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const updatedBurgerList = clearBurgerList();
      setBurgerList(updatedBurgerList);

      const nextIndex =
        selectedBurger.index + 1 < burgerList.length
          ? selectedBurger.index + 1
          : 0;
      setSelectedBurger(burgerList[nextIndex]);

      const updatedBurgerListWithSelection = updatedBurgerList.map((burger) =>
        burger.index === nextIndex ? { ...burger, selected: true } : burger
      );
      setBurgerList(updatedBurgerListWithSelection);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [
    selectedBurger,
    burgerList,
    setSelectedBurger,
    setBurgerList,
    clearBurgerList,
  ]);
  return (
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
  );
};

export default BurgerList;
