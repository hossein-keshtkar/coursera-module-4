import { greetToArr } from "./funcs/greetToArr.mjs";
import { listItemGenerator } from "./funcs/listItemGenerator.mjs";
import { names } from "./data/names.mjs";

const ul = document.getElementsByTagName("ul")[0];
const firstChild = ul.firstChild;

const greetToNames = () => {
  const listItems = greetToArr(names);

  listItems.forEach((item) => {
    firstChild ? ul.insertBefore(item, firstChild) : ul.appendChild(item);
  });
};

const formHandler = (e) => {
  e.preventDefault();
  const userInput = e && e.target[0].value;
  const li = listItemGenerator(userInput);

  firstChild ? ul.insertBefore(li, firstChild) : ul.append(li);
};

const greetBtn = document.getElementById("greet-names");
greetBtn.addEventListener("click", greetToNames);
document.addEventListener("submit", formHandler);
