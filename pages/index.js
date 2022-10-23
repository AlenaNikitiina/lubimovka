
//TODO доделать хтмл, убрать лишние элементы и стили

function findVideos() {
  const videos = Array.from(document.querySelectorAll('.video__container'));
  videos.forEach(setupVideo);

  function setupVideo(video) {
    const playBtn = video.querySelector('.video__play-icon');
    const cover = video.querySelector('.video__cover');
    const id = cover.src.split('/')[4];

    video.addEventListener('click', () => {
      playBtn.classList.add('video__play-icon_hidden');
      cover.classList.add('video__cover_hidden');
      video.append(createVideo(id));
    })
  }

  function createVideo(id) {
    const videoItem = document
    .querySelector('.video__template')
    .content
    .querySelector('.video__frame')
    .cloneNode(true)

    videoItem.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
    return videoItem;
  }
}

findVideos();
