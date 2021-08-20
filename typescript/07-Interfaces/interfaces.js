"use strict";
//O Básico sobre Interfaces
// console.log('O Básico sobre Interfaces');
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//# sourceMappingURL=interfaces.js.map