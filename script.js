const inputCartaTexto = document.getElementById('carta-texto');
const buttonCriarCarta = document.getElementById('criar-carta');
const pCartaGerada = document.getElementById('carta-gerada');

function createLetter() {
  const content = inputCartaTexto.value;
  const splitContent = content.split(' ');

  if (pCartaGerada.innerHTML.length > 0) {
    pCartaGerada.innerHTML = '';
  }

  for (let index = 0; index < splitContent.length; index += 1) {
    pCartaGerada.innerHTML += `<span>${splitContent[index]}<span>`
  }
}

buttonCriarCarta.addEventListener('click', createLetter);