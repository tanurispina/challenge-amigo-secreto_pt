//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Retirei os onclick do botao no html e recebi os dados via dom, adicionando addEventListener
// Lista que armazena os nomes
let amigos = [];

// Elementos do DOM
const nomeDoAmigo = document.querySelector("#amigo");
const btnAdicionar = document.querySelector("#send");
const listaAmigos = document.querySelector("#listaAmigos");
const mensagemSorteio = document.querySelector(".result-list");
const btnSortear = document.querySelector("#sortear");
const btnReiniciar = document.querySelector("#reiniciar");

// Adiciona nome à lista e validacao
btnAdicionar.addEventListener("click", () => {
  const nomeDigitado = nomeDoAmigo.value.trim();

  if (nomeDigitado === "" || !isNaN(nomeDigitado)) {
    alert("Digite um nome válido!");
  } else if (amigos.includes(nomeDigitado)) {
    alert("Nome duplicado!");
  } else {
    amigos.push(nomeDigitado);
    atualizarLista();
  }

  // Limpa o campo de entrada sempre
  nomeDoAmigo.value = "";
});

// Atualiza a lista na tela
function atualizarLista() {
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Sorteia um nome e exibe o resultado
btnSortear.addEventListener("click", () => {
  if (amigos.length === 0) {
    alert("Adicione amigos antes de sortear!");
    return;
  }

  const posicaoSorteada = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[posicaoSorteada];

  listaAmigos.innerHTML = ""; // Limpa a lista
  mensagemSorteio.innerHTML = `O nome do amigo selecionado é: ${nomeSorteado}`;
});

// adicionado botao para reiniciar o jogo
btnReiniciar.addEventListener("click", () => {
  amigos = [];
  listaAmigos.innerHTML = "";
  mensagemSorteio.innerHTML = "";
  nomeDoAmigo.value = "";
});
