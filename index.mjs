import { greetToArr } from "./greetToArr.mjs";

const names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];

const greetToNames = () => {
  const ul = document.getElementsByTagName("ul")[0];
  const listItems = greetToArr(names);

  console.log(ul);

  listItems.forEach((item) => {
    ul.appendChild(item);
  });
};

const greetBtn = document.getElementById("greet-names");
greetBtn.addEventListener("click", greetToNames);

const formHandler = (e) => {
  e.preventDefault();

  console.log(greetBtn);
};

document.addEventListener("submit", formHandler);
