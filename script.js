const inputCartaTexto = document.getElementById('carta-texto');
const buttonCriarCarta = document.getElementById('criar-carta');
const pCartaGerada = document.getElementById('carta-gerada');
const tagSpan = document.getElementsByTagName('span');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function randomClass(element) {
  const random = Math.floor(Math.random() * element.length);
  return random;
}

function classSpanElements() {
  const conjunto = [];
  conjunto.push(styleGroup[randomClass(styleGroup)]);
  conjunto.push(sizeGroup[randomClass(sizeGroup)]);
  conjunto.push(rotationGroup[randomClass(rotationGroup)]);
  conjunto.push(inclinationGroup[randomClass(inclinationGroup)]);
  return conjunto;
}

function removeVirgula() {
  const classes = classSpanElements().toString().replace(/,/g, ' ');
  return classes;
}

function createLetter() {
  const content = inputCartaTexto.value;
  const splitContent = content.split(' ');
  const spaceVerification = content.trim();

  if (pCartaGerada.innerHTML.length > 0) {
    pCartaGerada.innerHTML = '';
  }

  for (let index = 0; index < splitContent.length; index += 1) {
    pCartaGerada.innerHTML += `<span class=${removeVirgula()}>${splitContent[index]}<span>`;
  }

  if (content.length == 0 || spaceVerification.length == 0) {
    pCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

buttonCriarCarta.addEventListener('click', createLetter);
