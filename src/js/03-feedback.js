import throttle from 'lodash.throttle';

const LocalStorageData = 'feedback-form-state';
const formElement = document.querySelector('.feedback-form');
const { email: emailInput, message: messageInput } = formElement.elements;
const lastFormState = localStorage.getItem(LocalStorageData);

const storageInput = () => {
  formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(LocalStorageData, JSON.stringify(formState));
};

const onSubmit = event => {
  formElement.reset();
  localStorage.removeItem(LocalStorageData);
  console.log(formState);
  event.preventDefault();
};

let formState = null;

if (lastFormState) {
  try {
    formState = JSON.parse(lastFormState);
    messageInput.value = formState.message;
    emailInput.value = formState.email;
  } catch (error) {
    console.error(`${error.name}: ${error.message}.`);
  }
}
formElement.addEventListener('input', throttle(storageInput, 500));
formElement.addEventListener('submit', onSubmit);
