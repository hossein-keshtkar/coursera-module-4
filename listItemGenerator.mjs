const listItemGenerator = (name) => {
  const listItem = document.createElement("li");

  listItem.textContent = /^[j]/i.test(name)
    ? `Good Bye ${name}`
    : `Hello ${name}`;

  listItem.classList.add("list-group-item", "list-group-item-success");

  return listItem;
};

export { listItemGenerator };
