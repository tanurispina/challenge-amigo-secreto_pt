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
