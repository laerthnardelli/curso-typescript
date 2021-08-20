"use strict";
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
// Interfaces e Propriedades
console.log('Interfaces e Propriedades');
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    //idade: 27,
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27}); //gera um erro porque não é condizendo com a interface Humano
saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 });
//# sourceMappingURL=interfaces.js.map