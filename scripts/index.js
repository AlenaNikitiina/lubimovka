const popup = document.querySelector('.popup'); // нашли попап
const popupZoom = document.querySelector('.popup_zoom'); // второй класс попапа
const popupCloseButton = document.querySelectorAll('.popup__close-button'); // кнопка закрыть попап, крестик
const popupImage = document.querySelector('.popup__img'); // нашли фото из попапа



// функция открытия попапа
function openPopup (item) {
  item.classList.add('popup_opened');
  //document.addEventListener('keydown', closeByEscape);
}

// функция закрытия попапа
function closePopup (item) {
  item.classList.remove('popup_opened');
  //document.removeEventListener('keydown', closeByEscape);
}

popup.addEventListener('click', openPopup())

/*
popupZoom.addEventListener('click', function (evt) {
  //const a = document.querySelector('.element__foto');
  openPopup(popupZoom)
})



/*
// функция закрытия попапов по нажатию на Escape
const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedNowPopup = document.querySelector('.popup_opened')
    closePopup(openedNowPopup);
  }
}

/*
// закрыть попапы нажав на оверлей или крестик
popup.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(item);
    }
  })
})

*/
