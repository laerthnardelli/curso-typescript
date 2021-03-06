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
// interface Humano {
//   nome: string;
// }
// function saudarComOla(pessoa: Humano) {
//   console.log('Olá, ' + pessoa.nome);
// }
// function mudarNome(pessoa: Humano ){
//   pessoa.nome = 'Joana';
// }
// const pessoa = {
//   nome: 'João',
//   idade: 27,
// }
// saudarComOla(pessoa);
// mudarNome(pessoa);
// saudarComOla(pessoa);
// interface Humano {
//   nome: string;
//   idade?: number; //a interrogação se refere para dizer que é um atributo opcional
//   [props: string]: any  //assim, o atributo tem um nome dinamico
// }
// function saudarComOla(pessoa: Humano) {
//   console.log('Olá, ' + pessoa.nome);
// }
// function mudarNome(pessoa: Humano) {
//   pessoa.nome = 'Joana';
// }
// const pessoa = {
//   nome: 'João',
//   //idade: 27,
// }
// saudarComOla(pessoa);
// mudarNome(pessoa);
// saudarComOla(pessoa);
// //saudarComOla({nome: 'Jonas', idade: 27}); //gera um erro porque não é condizendo com a interface Humano
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 });
//Interfaces e Métodos
console.log('Interfaces e Métodos');
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');
//Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
    ;
}
class RealAB {
    a() { }
    ;
    b() { }
    ;
}
class RealABC {
    a() { }
    ;
    b() { }
    ;
    c() { }
    ;
}
// function teste(b: B) {
// }
// teste(new RealABC);
class AbstrataABD {
    a() { }
    ;
    b() { }
    ;
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map