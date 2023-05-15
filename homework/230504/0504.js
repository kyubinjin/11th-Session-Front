// 작성하기 버튼 정의
const addBtn = document.getElementById("add-button");

// 작성하기 버튼 눌렀을 때 발생하는 함수
const printTodoItem1 = (e) => {
  const todoItem1 = document.createElement("li");
  const todoCkbox1 = document.createElement("span");
  const todoInput = document.createElement("input");
  const todoSubmitCk = document.createElement("button");

  todoCkbox1.id = "todo-checkbox1";
  //   todoCkbox1.type = "checkbox";
  //   todoCkbox1.addEventListener("click", toggleTodoToDone);

  todoInput.id = "todo-input";
  todoInput.type = "text";
  todoInput.placeholder = "할 일을 입력해 주세요.";
  //   todoInput.setAttribute("type", "text");
  //   todoInput.setAttribute("placeholder", "할 일을 입력해 주세요");

  todoSubmitCk.id = "submit-check";
  todoSubmitCk.type = "submit";
  todoSubmitCk.style.backgroundImage = "url('images/check.png')";
  //   todoSubmitCk.addEventListener("click", printTodoItem2);

  todoItem1.id = "todo-item1";
  todoItem1.appendChild(todoCkbox1);
  todoItem1.appendChild(todoInput);
  todoItem1.appendChild(todoSubmitCk);

  for (let i = 0; i < todoSubmitCk.length; i++) {
    todoItem1.appendChild(todoSubmitCk[i]);
  }

  document.querySelector(".todo-ul").appendChild(todoItem1);
};

addBtn.addEventListener("click", PrintTodoItem1);

// deleteTodoItem1 정의
const deleteTodoItem1 = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-ul").removeChild(target);
};

// toggleToDoToDone 함수 정의 (todo에서 done으로 이동)
const toggleTodoToDone = (e) => {
  // todo list에서 item 삭제
  deleteTodoItem2(e);
  // done list에 item 추가
  printDoneItem(e.target.innerText);
};

// printTodoItem2 정의
const printTodoItem2 = (text) => {
  const todoItem2 = document.createElement("li");
  const todoCkbox2 = document.createElement("input");
  const todoText = document.createElement("span");
  const todoMod = document.createElement("img");
  const todoDel = document.createElement("button");

  // todo 체크박스
  todoCkbox2.id = "todo-checkbox2";
  todoCkbox2.type = "checkbox";
  //   todoCkbox2.style.backgroundImage = "url('images/checkbox.png')";
  todoCkbox2.addEventListener("click", toggleTodoToDone);

  // todo 내용
  todoText.id = "todo-text";
  todoText.innerText = text;

  // todo 수정 버튼
  todoMod.id = "todo-mod";
  todoMod.src = "images/modify.png";

  // todo 삭제 버튼
  todoDel.id = "todo-del";
  todoDel.style.backgroundImage = "url('images/trashcan.png')";
  todoDel.addEventListener("click", deleteTodoItem2);

  todoItem2.id = "todo-item2";
  todoItem2.appendChild(todoCkbox2);
  todoItem2.appendChild(todoText);
  todoItem2.appendChild(todoMod);
  todoItem2.appendChild(todoDel);
  document.querySelector(".todo-ul").appendChild(todoItem2);
};

// 작성 완료 체크 버튼 눌렀을 때 발생하는 함수
const printFinalTodoItem = (e) => {
  e.preventDefault();
  deleteTodoItem1(e);
  printTodoItem2(e.target.innerText);
};

todoSubmitCk.addEventListener("click", printFinalTodoItem);

//
const todoSubmitCkList = document.querySelectorAll(".submit-check");

todoSubmitCkList.forEach((submitCk) => {
  submitCk.addEventListener("click", printFinalTodoItem);
});

// deleteTodoItem2 정의 (할 일 삭제)
const deleteTodoItem2 = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".todo-ul").removeChild(target);
};

// deleteDoneItem 정의
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector("#done-ul").removeChild(target);
};

// toggleDoneToDo 함수 정의 (done에서 todo로 이동)
const toggleDoneToDo = (e) => {
  // todo list에서 item 삭제
  deleteDoneItem(e);
  // done list에 item 추가
  printFinalTodoItem(e.target.innerText);
};

// printDoneItem 정의 (끝낸 일 출력)
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneCkbox = document.createElement("button");
  const doneText = document.createElement("span");
  const doneDel = document.getElementById("done-del");

  doneCkbox.className = "done-checkbox";
  doneCkbox.style.backgroundImage = "url('images/checkbox.png')";
  doneCkbox.addEventListener("click", toggleDoneTodo);

  doneText.className = "done-text";
  doneText.innerText = text;

  doneDel.className = "done-del";
  doneDel.style.backgroundImage = "url('images/trashcan.png')";
  doneDel.addEventListener("click", deleteDoneItem);

  doneItem.className = "done-item";
  doneItem.appendChild(doneCkbox);
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-ul").appendChild(doneItem);
};
