import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

// DOM Elements
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = document.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

// Modal Handlers
const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// Generate Todo Element using the Todo class
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  return todo.getView();
};

const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  todosList.append(todoElement);
};

// Event Listeners
addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});


addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = evt.target.name.value.trim();
  const dateInput = evt.target.date.value;

  if (!name) return;

  const date = dateInput
    ? new Date(new Date(dateInput).getTime() + new Date().getTimezoneOffset() * 60000)
    : null;

  const id = uuidv4();
  const values = { name, date, id };

  renderTodo(values);              
  formValidator.resetValidation(); 
  closeModal(addTodoPopup);
});

initialTodos.forEach(renderTodo); 

// Enable form validation
const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
