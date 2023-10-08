const imageIsloaded = (src, element) => {
  const bgElement = document.querySelector(element);
  let preloaderImg = document.createElement('img');
  preloaderImg.src = src;
  preloaderImg.addEventListener('load', (event) => {
    bgElement.style.backgroundImage = `url(${src})`;
    preloaderImg = null;
  });
};

imageIsloaded(
  'assets/images/background/full/backgroundHeroBanner.jpg',
  '#home'
);
