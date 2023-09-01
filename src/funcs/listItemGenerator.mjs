import { greetValidator } from "./greetValidator.mjs";

const listItemGenerator = (name) => {
  const listItem = document.createElement("li");

  listItem.textContent = greetValidator(name);

  listItem.classList.add("list-group-item", "list-group-item-success");

  return listItem;
};

export { listItemGenerator };
