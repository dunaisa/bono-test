const form = document.querySelector('.form');
const textInput = document.getElementById('text');
const emailInput = document.getElementById('email');
const textareaInput = document.getElementById('textarea');

const regEx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

textInput.addEventListener('input', function () {
  textInput.classList.remove('form__input_type_error');
});

textareaInput.addEventListener('input', function () {
  textareaInput.classList.remove('form__textarea_type_error');
});

emailInput.addEventListener('input', function () {
  emailInput.classList.remove('form__input_type_error');
});

function checkEmail(email) {
  return regEx.test(String(email).toLowerCase());
};

function checkValidity() {

  if (textInput.value.length < 1 && textareaInput.value.length < 1 && !checkEmail(emailInput.value)) {
    textInput.classList.add('form__input_type_error');
    textareaInput.classList.add('form__textarea_type_error');
    emailInput.classList.add('form__input_type_error');
    return false
  };

  if (textInput.value.length < 1) {
    textInput.classList.add('form__input_type_error');
    return false
  };

  if (textareaInput.value.length < 1) {
    textareaInput.classList.add('form__textarea_type_error');
    return false
  };

  if (!checkEmail(emailInput.value)) {
    emailInput.classList.add('form__input_type_error');
    return false
  };

  return true
};

function handleSubmitForm(event) {
  event.preventDefault();
  if (checkValidity()) {
    textInput.classList.remove('form__input_type_error');
    textareaInput.classList.remove('form__textarea_type_error');
    emailInput.classList.remove('form__input_type_error');
    console.log(`Имя: ${textInput.value}`);
    console.log(`Почта: ${emailInput.value}`);
    console.log(`Сообщение: ${textareaInput.value}`);
    textInput.value = '';
    textareaInput.value = '';
    emailInput.value = '';
  };
};

form.addEventListener('submit', handleSubmitForm);