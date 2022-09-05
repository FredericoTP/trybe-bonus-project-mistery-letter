const inputCartaTexto = document.getElementById('carta-texto');
const buttonCriarCarta = document.getElementById('criar-carta');
const pCartaGerada = document.getElementById('carta-gerada');

function createLetter() {
  const content = inputCartaTexto.value;
  const splitContent = content.split(' ');
  const spaceVerification = content.trim();

  if (pCartaGerada.innerHTML.length > 0) {
    pCartaGerada.innerHTML = '';
  }

  for (let index = 0; index < splitContent.length; index += 1) {
    pCartaGerada.innerHTML += `<span>${splitContent[index]}<span>`;
  }

  if (content.length == 0 || spaceVerification.length == 0) {
    pCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

buttonCriarCarta.addEventListener('click', createLetter);
