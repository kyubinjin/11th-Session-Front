const addBtn = document.getElementById("add-button"); // 작성하기 버튼 정의

// 작성하기 버튼 눌렀을 때 발생하는 함수
const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoCkbox = document.createElement("button");
  const todoInput = document.createElement("input");
  const todoSubmitCk = document.createElement("button");

  todoCkbox.id = "todo-checkbox";
  todoCkbox.type = "button";
  todoCkbox.addEventListener("click", toggleTodoToDone);

  todoInput.id = "todo-input";
  todoInput.type = "text";
  todoInput.placeholder = "할 일을 입력해 주세요.";

  todoSubmitCk.id = "submit-check";
  todoSubmitCk.type = "submit";
  todoSubmitCk.addEventListener("click", printFinalTodoItem); // todoSubmitCk 눌렀을 때 printFinalTodoItem 출력

  todoItem.id = "todo-item";
  todoItem.appendChild(todoCkbox);
  todoItem.appendChild(todoInput);
  todoItem.appendChild(todoSubmitCk);

  document.querySelector(".todo-ul").appendChild(todoItem);
};

// 작성하기 버튼 눌렀을 때 printTodoItem 출력
addBtn.addEventListener("click", printTodoItem);

// printFinalTodoItem 정의
const printFinalTodoItem = (e) => {
  event.preventDefault();
  const todoContent = document.querySelector("#todo-input").value;
  if (todoContent) {
    // todoSubmitCk 버튼 삭제
    const todoSubmitCk = e.target;
    const todoItem = todoSubmitCk.parentNode;
    todoItem.removeChild(todoSubmitCk);

    // todoMod와 todoDel 버튼 추가
    const todoMod = document.createElement("img");
    const todoDel = document.createElement("button");

    todoMod.id = "todo-mod";
    todoMod.src = "images/modify.png";
    todoDel.id = "todo-del";
    todoDel.addEventListener("click", deleteTodoItem);

    todoItem.appendChild(todoMod);
    todoItem.appendChild(todoDel);
  }
};

// deleteTodoItem1 정의
const deleteTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-ul").removeChild(target);
};

// deleteFinalTodoItem 정의 (todo삭제)
const deleteFinalTodoItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-ul").removeChild(target);
};

// toggleToDoToDone 함수 정의 (todo에서 done으로 이동)
const toggleTodoToDone = (e) => {
  const todoItem = e.target.parentNode;
  const todoText = todoItem.querySelector("#todo-input").value;
  deleteFinalTodoItem(e);
  printDoneItem(todoText);
};

// printDoneItem 정의 (done 출력)
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneCkbox = document.createElement("button");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");

  doneCkbox.id = "done-checkbox";
  doneCkbox.type = "button";
  doneCkbox.addEventListener("click", toggleDoneToTodo);

  doneText.id = "done-text";
  doneText.innerText = text;

  doneDel.id = "done-del";
  doneDel.addEventListener("click", deleteDoneItem);

  doneItem.id = "done-item";
  doneItem.appendChild(doneCkbox);
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-ul").appendChild(doneItem);
};

// deleteDoneItem 정의 (done 삭제)
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-ul").removeChild(target);
};

// toggleDoneToDo 함수 정의 (done에서 todo로 이동)
const toggleDoneToTodo = (e) => {
  const doneItem = e.target.parentNode;
  const doneText = doneItem.querySelector("#done-text").innerText;
  deleteDoneItem(e);
  printTodoItem(doneText);
};
