var form = document.querySelector(".form__body");
var button = document.querySelector(".modal__close");
var popupSuccess = document.querySelector(".modal__success");
var popupError = document.querySelector(".modal__error");
var overlay = document.querySelector(".modal__overlay");
var givenName = form.querySelector("[name=given-name]");
var surname = form.querySelector("[name=surname]");
var email = form.querySelector("[name=email]");


button.addEventListener("click", function (evt) {
  popupSuccess.classList.remove("modal__show");
  popupError.classList.remove("modal__show");
  overlay.classList.remove("modal__show");
});

form.addEventListener("submit", function (evt) {
  overlay.classList.add("modal__show");
  if (!surname.value || !givenName.value || !email.value) {  
    evt.preventDefault();
    popupError.classList.add("modal__show");
  } else { 
    popupSuccess.classList.add("modal__show");
    }
});

window.addEventListener("keydown",function(evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains("modal__show")) {
      evt.preventDefault();
      popupSuccess.classList.remove("modal__show");
      popupError.classList.remove("modal__show");
      overlay.classList.remove("modal__show");
    }
  }
});