const popup = document.querySelector('.popup'); // нашли попап
const popupZoom = document.querySelector('.popup_zoom'); // второй класс попапа
const popupCloseButton = document.querySelectorAll('.popup__close-button'); // кнопка закрыть попап, крестик
const popupImage = document.querySelector('.popup__img'); // нашли фото из попапа

//кнопка бургерного меню и само меню
const menuButton = document.querySelector(".burger");
const menu = document.querySelector(".header");
//функция, открывающая менюшку
function openMenu() {
  menu.classList.toggle("menu_open");
};

//функция, меняющая вид кнопки
function toggleMenuButton() {
  menuButton.classList.toggle("burger_active");
};
menuButton.addEventListener("click", openMenu, false);
menuButton.addEventListener("click", toggleMenuButton, false);



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

popupZoom.addEventListener('click', function (evt) {
  //const a = document.querySelector('.element__foto');
  openPopup(popupZoom)
})



// функция закрытия попапов по нажатию на Escape
const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedNowPopup = document.querySelector('.popup_opened')
    closePopup(openedNowPopup);
  }
}


// закрыть попапы нажав на оверлей или крестик
popup.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(item);
    }
  })
})



//слайдер
let offfset = 0;
const contentLine = document.querySelector('.show__content');

document.querySelector('.show__next').addEventListener('click', function(){
  offfset = offfset + 270;
  if (offfset > 1080) {
    offfset = 0;
  }
  contentLine.style.left = -offfset + 'px';
});

document.querySelector('.show__prev').addEventListener('click', function(){
  offfset = offfset - 270;
  if (offfset < 0) {
    offfset = 1080;
  }
  contentLine.style.left = - offfset + 'px';
});
