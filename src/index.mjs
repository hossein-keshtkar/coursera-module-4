import { greetToArr } from "./funcs/greetToArr.mjs";
import { names } from "./data/names.mjs";

const ul = document.getElementsByTagName("ul")[0];
document.addEventListener("DOMContentLoaded", () => {
  const firstChild = ul.firstChild;

  const greetToNames = () => {
    const listItems = greetToArr(names);

    listItems.forEach((item) => {
      firstChild ? ul.insertBefore(item, firstChild) : ul.appendChild(item);
    });
  };

  const greetBtn = document.getElementById("greet-names");
  greetBtn.addEventListener("click", greetToNames);
});
