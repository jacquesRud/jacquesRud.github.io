const imageIsloaded = (src, element) => {
  const bgElement = document.querySelector(element);
  let preloaderImg = document.createElement('img');
  preloaderImg.src = src;
  preloaderImg.addEventListener('load', (event) => {
    setTimeout(() => {
      bgElement.style.backgroundImage = `url(${src})`;
      preloaderImg = null;
    }, 2000);
  });
};

imageIsloaded(
  'assets/images/background/full/backgroundHeroBanner.jpg',
  '#home'
);
