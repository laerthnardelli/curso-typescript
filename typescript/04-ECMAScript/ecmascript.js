"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//let & const #01
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
//cpf = '789.101.132-78';
console.log(cpf);
//let & const #02
var segredo = 'externo!';
function revelar() {
    let segredo = 'interno'; //escopo de função, pode usar let ou var
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    const def = 'def'; //escopo de bloco
    console.log(def);
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i);
// Arrow Function #01
// const somar = function (n1: number, n2: number): number {
//   return n1 + n2
// }
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
// Arrow Function #02
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('João');
// this
// function normalComThis() {
//     console.log(this);
// }
// normalComThis();
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// normalComThisEspecial();
// // this???
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();
// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
// arrowComThisEspecial();
// Default parameters - Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Operador Spread & Rest #01
const numbers = [1, 10, 99, -5, 200, 1034];
//console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]));
console.log(Math.max(...numbers)); //espalha como parametro da função max
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', ...turmaA, 'Miguel', 'Lorena'];
console.log(turmaB);
// Operador Spread & Rest #02
// function retornarArray(arg1: number, arg2: number): number[] {
//   return [arg1, arg2];
// }
//  const numeros = retornarArray(1, 2);
// console.log(numeros);
function retornarArray(...args) {
    return args; //rest
}
const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers)); //Spread
// Operador Spread & Rest #03 (Tupla)
const tupla = [1, 'abc', false];
console.log(tupla);
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
//Template String
const usuarioID = 'SuporteCod3r';
const notificacoes = '19';
// const boasVindas = 'Boas vindas ' + usuarioID +
//     'Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);
// Exercicios - Traduza esses códigos de JavaScript para TypeScript
// Exercicio 1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
// var dobro = function(valor) {
//   return valor * 2;
//   }
//   console.log(dobro(10));
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2 - Verifique se há espaço para melhorias nesse trecho de código!
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome);
//   }
//   dizerOla();
//   dizerOla("Anna");
const dizerOla = function (nome = 'Pessoa') {
    console.log('Olá, ' + nome);
};
dizerOla();
dizerOla('Anna');
// Exercicio 3 - Dado esse array, imprima o menor valor!
// var nums = [-3, 33, 38, 5];
// console.log('???');
const nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));
// Exercicio 4 - Adicione os elementos de nums em array !
// var nums = [-3, 33, 38, 5];
// var array = [55, 20];
// console.log(array);
const array = [55, 20];
// Adicionar todos os elementos de "nums" em array
array.push(...nums);
console.log(array);
// Exercicio 5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
// var notas = [8.5, 6.3, 9.4];
// var notas1 = notas[0];
// var notas2 = notas[1];
// var notas3 = notas[2];
// console.log(nota1, nota2, nota3);
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
// var cientista = {primeiroNome: "Will", experiencia: 12};
// var primeiroNome = cientista.primeiroNome;
// var experiencia = cientista.experiencia;
// console.log(primeiroNome, experiencia);
const cientista = { primeiroNome: 'Will', expeciencia: 12 };
const { primeiroNome, expeciencia } = cientista;
console.log(primeiroNome, expeciencia);
//Sobre Promises
// Callback
// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback('3s depois...')
//   }, 3000)
// }
// esperar3s(function (resultado: string) {
//   console.log(resultado);
// });
// //Promises
// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve('3s depois promise...')
//     }, 3000)
//   });
// }
// esperar3sPromise()
//   .then(dado => console.log(dado));
const node_fetch_1 = __importDefault(require("node-fetch"));
// fetch('https://swapi.dev/api/people/1/')
//   .then(res => res.json())
//   .then(dados => console.log(dados))
node_fetch_1.default('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => node_fetch_1.default(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log('Catch!!!!' + err));
//# sourceMappingURL=ecmascript.js.map