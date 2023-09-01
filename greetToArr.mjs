import { listItemGenerator } from "./listItemGenerator.mjs";

const greetToArr = (names) => {
  const listItems = names.map((name) => listItemGenerator(name));

  return listItems;
};

export { greetToArr };
