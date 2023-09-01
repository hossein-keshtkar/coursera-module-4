import { greetToArr } from "./funcs/greetToArr.mjs";
import { listItemGenerator } from "./funcs/listItemGenerator.mjs";
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

  const formHandler = (e) => {
    if (!e) return;

    e.preventDefault();
    const userInput = e.target[0].value;
    const btn = document.getElementById("exampleModal");

    if (userInput === "" || /^[\d]/.test(userInput)) {
      btn.setAttribute("data-bs-toggle", "modal");
      btn.setAttribute("data-bs-target", "#exampleModal");
    } else {
      btn.removeAttribute("data-bs-toggle");
      btn.removeAttribute("data-bs-target");
      const li = listItemGenerator(userInput);
      firstChild ? ul.insertBefore(li, firstChild) : ul.append(li);
    }
  };

  const greetBtn = document.getElementById("greet-names");
  greetBtn.addEventListener("click", greetToNames);
  document.addEventListener("submit", formHandler);
});
