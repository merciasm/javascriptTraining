const DOMElements = {
  todoList: document.querySelector(".todo__list"), //using querySelector > getElementbySomething
  todoInput: document.querySelector(".todo__input")
};

// Add "check" in the item
DOMElements.todoList.addEventListener(  //using addEventListener is cool
  "click",
  function(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
    }
  },
  false
);

const addButton = document.querySelector(".todo__btn");
addButton.addEventListener("click", function(event) {
  createNewItem();
});


function createNewItem() {
  const { todoInput } = DOMElements; //look to the obj
  if (todoInput.value === "") {
    alert("Escreve algo aí, queridu!");
    return;
  }

  let li = document.createElement("li");
  let itemText = document.createTextNode(todoInput.value);
  li.appendChild(itemText);
  document.querySelector(".todo__list").appendChild(li);
  todoInput.value = "";
  li.appendChild(createDeleteButton());
}

function createDeleteButton() {
  let span = document.createElement("SPAN");
  let deleteText = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(deleteText);
  return span;
}
