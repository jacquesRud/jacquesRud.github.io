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

const sendEmail = () => {
  const recipientEmail = 'manuuu-e@hotmail.fr';
  const subject = 'Prise de contact Emanuelle rudloff';

  const body = `Bonjour, je viens de voir votre résumé et j'aimerai vous contacter`;

  const mailtoLink =
    'mailto:' +
    recipientEmail +
    '?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
};

const downloadCV = () => {
  const cvFilePath = 'assets/documents/CV Emmanuelle Rudloff.pdf';
  window.open(cvFilePath, '_blank');
};
