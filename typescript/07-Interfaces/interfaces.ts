
//O Básico sobre Interfaces
// console.log('O Básico sobre Interfaces');

// function saudarComOla(pessoa: {nome: string }) {
//   console.log('Olá, ' + pessoa.nome);
// }

// function mudarNome(pessoa: {nome: string }){
//   pessoa.nome = 'Joana';
// }

// const pessoa = {
//   nome: 'João',
//   idade: 27
// }

// saudarComOla(pessoa);
// mudarNome(pessoa);
// saudarComOla(pessoa);



interface Humano {
  nome: string;
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano ){
  pessoa.nome = 'Joana';
}

const pessoa = {
  nome: 'João',
  idade: 27,
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);