import {
  checkInputValidity,
  toggleButtonState,
  setEventListeners,
} from "../scripts/validate.js";

class FormValidator {
  constructor(settings, formEl) {
    this._settings = settings;
    this._formEl = formEl;
    this._inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
    this._buttonElement = formEl.querySelector(settings.submitButtonSelector);
  }

  _checkInputValidity(inputElement) {
    checkInputValidity(this._formEl, inputElement, this._settings);
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(this._inputList, this._buttonElement, this._settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._formEl.reset();
    this._inputList.forEach((input) => {
      input.classList.remove(this._settings.inputErrorClass);
      const errorEl = this._formEl.querySelector(`#${input.id}-error`);
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.classList.remove(this._settings.errorClass);
      }
    });
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
  }
}

export default FormValidator;
