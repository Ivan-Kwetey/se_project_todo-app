import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

// DOM Elements
const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
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
  const todoElement = todo.getView();
  return todoElement;
};

// Event Listeners
addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

// Form Submission Logic
addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = evt.target.name.value.trim();
  const dateInput = evt.target.date.value;

  // Validate name
  if (!name) return;

  // Adjust timezone offset for date
  const date = dateInput
    ? new Date(new Date(dateInput).getTime() + new Date().getTimezoneOffset() * 60000)
    : null;

  const id = uuidv4();
  const values = { name, date, id };

  const todoElement = generateTodo(values);
  todosList.append(todoElement);

  formValidator.resetValidation(); // Reset fields + disable button
  closeModal(addTodoPopup);
});

// Load Initial Todos
initialTodos.forEach((item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
});

// Enable validation
const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
