const addButton = document.querySelector(".btn");
const inputValue = document.querySelector(".adding");
const todoList = document.querySelector(".todo-list");
const clearButton = document.querySelector(".delete");
const sorter = document.querySelector(".sort");
const deleteButton = document.querySelector(".delete");



function addTodo() {
  const newTask = inputValue.value;

  if (newTask.trim() !== "") {

    console.log(newTask);
    const listItem = document.createElement("li");
    const delBtn = document.createElement("img");
    delBtn.src = "./assets/images/Group 56.svg";
    delBtn.classList.add("delete-button");
    listItem.classList.add("todo-list-item");
    listItem.textContent = newTask.trim();
    listItem.appendChild(delBtn);
    todoList.appendChild(listItem);
    inputValue.value = "";
    delBtn.addEventListener("mouseover", function () {
      delBtn.src = "./assets/images/Group 70.svg";
    });

    delBtn.addEventListener("mouseout", function () {
      delBtn.src = "./assets/images/Group 56.svg";
    });
 

    delBtn.addEventListener("click", function () {
      listItem.remove();
    });
  }
}


addButton.addEventListener("click", addTodo);

inputValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
clearButton.addEventListener("click", function () {
  inputValue.value = "";
});


let ascendingSort = true; 

sorter.addEventListener("click", function () {
  const todoItems = Array.from(document.querySelectorAll(".todo-list li"));
  const sortedItems = todoItems.sort((a, b) =>
    a.textContent.trim().localeCompare(b.textContent.trim())
  );

  sorter.src= './assets/images/Group 38.svg';

  if (!ascendingSort) {
    sortedItems.reverse();
    sorter.src= './assets/images/Group 93.svg';

  }

  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }

  sortedItems.forEach((item) => {
    todoList.appendChild(item);
  });


  ascendingSort = !ascendingSort;
});




deleteButton.addEventListener("mouseover", function () {
  deleteButton.src = "./assets/images/Group 70.svg";
});

deleteButton.addEventListener("mouseout", function () {
  deleteButton.src = "./assets/images/Group 56.svg";
});

let flag = true;
sorter.addEventListener("click", function () {
  if (flag) {
    sorter.src = "./assets/images/Group 96.svg";
    sorter.addEventListener("mouseover", function () {
        sorter.src = "./assets/images/Group 95.svg";
      });
      
      sorter.addEventListener("mouseout", function () {
        sorter.src = "./assets/images/Group 96.svg";
      });
      flag = !flag;
  }else{
    sorter.src = "./assets/images/Group 38.svg";
    sorter.addEventListener("mouseover", function () {
        sorter.src = "./assets/images/Group 73.svg";
      });
      
      sorter.addEventListener("mouseout", function () {
        sorter.src = "./assets/images/Group 38.svg";
      });
      flag = !flag;
  }
});


