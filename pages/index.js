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
