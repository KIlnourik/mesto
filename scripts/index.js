const editButton = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const nameInput = popup.querySelector('.popup__input_name');
const jobInput = popup.querySelector('.popup__input_job');
const popupForm = popup.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  profileName.textContent = nameInputValue;
  profileJob.textContent = jobInputValue;
  closePopup();
}
popupForm.addEventListener('submit', formSubmitHandler);
