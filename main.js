//CODIGO PLAY DO SOM, TECLA POR TECLA
// function tocaSomPom() {
//   document.querySelector("#som_tecla_pom").play();
// }
// document.querySelector(".tecla_pom").onclick = tocaSomPom;

//AUTOMATIZAÇAO DO TECLADO
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor não inválido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

// //enquanto - While
// let contador = 0;

// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   const idAudio = `#som_${instrumento}`;
//   //   console.log(idAudio);

//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };

//   contador++;

//   //   console.log(contador);
// }

//para - For
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  //   console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  //   console.log(contador);
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
