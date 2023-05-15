// 초기화 함수
const form = document.querySelector(".todo-form");

const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
};

// 할 일 추가 함수
const addTodoItem = () => {
  // submit과 동시에 창이 새로고침되기 때문에 할 일을 추가할 수 없음! 이를 방지해주는 역할
  event.preventDefault();
  // input에 입력한 value를 선택하여 todoContent에 대입
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력
const printTodoItem = (text) => {
  const todoItem = document.createElement("li");
  const todoText = document.createElement("span");
  const todoDel = document.createElement("button");

  // todo 내용
  todoText.innerText = text;
  todoText.className = "todo-item-text";
  todoText.addEventListener("click", toggleTodoToDone);

  // todo 삭제 버튼
  todoDel.innerText = "삭제";
  todoDel.className = "todo-delete-button";
  todoDel.addEventListener("click", deleteTodoItem);

  // li에 item (span, button) 추가
  todoItem.className = "todo-list-item";
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);
  document.querySelector(".todo-list").appendChild(todoItem);

  // input 창 초기화
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제
const deleteTodoItem = (e) => {
  // 삭제 버튼의 부모 요소까지 삭제해야하므로 부모 요소까지 올라가 선택한 후 삭제
  const target = e.target.parentNode;
  document.querySelector(".todo-ul").removeChild(target);
};

// 할 일 -> 끝낸 일 이동
const toggleTodoToDone = (e) => {
  // todo list에서 item 삭제
  deleteTodoItem(e);
  // done list에 item 추가
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력
const printDoneItem = (text) => {
  const doneItem = document.createElement("li");
  const doneText = document.createElement("span");
  const doneDel = document.createElement("button");

  doneText.innerText = text;
  doneText.className = "done-item-text";
  doneText.addEventListener("click", toggleDoneToDo);

  doneDel.innerText = "삭제";
  doneDel.className = "done-delete-button";
  doneDel.addEventListener("click", deleteDoneItem);

  doneItem.className = "done-list-item";
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneDel);

  document.querySelector(".done-list").appendChild(doneItem);
};

// 끝낸 일 삭제
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  document.querySelector(".done-list").removeChild(target);
};

// 끝낸 일 -> 할 일 이동
const toggleDoneToDo = (e) => {
  deleteDoneItem(e);
  printTodoItem(e.target.innerText);
};

const btn = document.querySelector(".popup-button");

const displayForm = () => {
  form.style.display === "none"
    ? (form.style.display = "block")
    : (form.style.display = "none");
};

// 시작 함수
init();
