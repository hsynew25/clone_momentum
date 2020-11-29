const todoForm = document.querySelector(".js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const todos_localStorage = "todos";

let todos = [];

function deleteTodo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = todos.filter((todo) => todo.id !== parseInt(li.id));
  todos = cleanTodos;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(todos_localStorage, JSON.stringify(todos));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = todos.length + 1;
  li.id = newId;
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteTodo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
  const todoObj = {
    text: text,
    id: newId,
  };
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(e) {
  e.preventDefault();
  paintTodo(todoInput.value);
  todoInput.value = "";
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(todos_localStorage);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach((todo) => paintTodo(todo.text));
  }
}

function init() {
  loadTodos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
