const editButton = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const nameInput = popup.querySelector('#name');
const jobInput = popup.querySelector('#job');
const popupForm = popup.querySelector('.popup__form');
//функция открытия попапа
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
//функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}
//функция передачи введенных данных из формы попапа в соответствующие места на сайте
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
