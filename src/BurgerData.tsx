import simpleBurger from "./assets/hamburgers/simples.jpeg";
import cabanaBurger from "./assets/hamburgers/cabanaburger.jpeg";
import comboCabana from "./assets/hamburgers/combocabana.jpeg";
import smashBurger from "./assets/hamburgers/smash.jpeg";

export const BurgerData = [
  {
    index: 0,
    selected: true,
    name: "Simples",
    price: "R$27.00",
    src: simpleBurger,
    ingredients: [
      "Pão com brioche selado na manteiga",
      "Hambúrguer de carne bovina 150g",
      "Queijo Cheddar",
      "Queijo Mussarela",
      "Alface",
      "Rúcula",
      "Tomate",
      "Molho especial",
      "Bacon",
      "Cebola Caramelizada",
    ],
  },
  {
    index: 1,
    selected: false,
    name: "Cabana Burger",
    price: "R$30.00",
    src: cabanaBurger,
    ingredients: [
      "Pão com brioche selado na manteiga",
      "Hambúrguer de carne bovina 150g",
      "Queijo Cheddar",
      "Queijo Mussarela",
      "Aneis de cebola roxa",
      "Rúcula",
      "Picles",
      "Molho barbecue",
      "Bacon",
    ],
  },
  {
    index: 2,
    selected: false,
    name: "Combo Cabana",
    price: "R$35.00",
    src: comboCabana,
    ingredients: [
      "Pão com brioche selado na manteiga",
      "Hambúrguer de carne bovina 150g",
      "Queijo Cheddar",
      "Queijo Mussarela",
      "Alface",
      "Rúcula",
      "Tomate",
      "Molho especial",
      "Bacon",
      "Cebola Caramelizada",
    ],
    extra: ["Batata Frita", "Refrigerante Coca-Cola 350ml"],
  },
  {
    index: 3,
    selected: false,
    name: "Smash Burger",
    price: "R$24.00",
    src: smashBurger,
    ingredients: [
      "Pão com brioche selado na manteiga",
      "Dois Hambúrguers de carne bovina 75g",
      "Duas Fatias de Queijo Cheddar",
      "Molho especial",
      "Bacon",
    ],
  },
];
