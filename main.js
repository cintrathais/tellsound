const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
    tocaSom(idAudio);
  
  }
}


