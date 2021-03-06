
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
console.log('Interfaces e Métodos')


interface Humano {
  nome: string;
  idade?: number; //a interrogação se refere para dizer que é um atributo opcional
  [props: string]: any  //assim, o atributo tem um nome dinamico
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana';
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar('Skywalker');


//Usando Classes...
class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date
  saudar(sobrenome: string) {
      console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);


// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  return Array(exp).fill(base).reduce((t, a) => t * a);
}

console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);

// Herança com Interfaces
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {};
}

class RealAB implements A, B {
  a(): void {};
  b(): void {};
}

class RealABC implements ABC {
  a(): void {};
  b(): void {};
  c(): void {};
}

// function teste(b: B) {

// }

// teste(new RealABC);

abstract class AbstrataABD implements A, B {
  a(): void {};
  b(): void {};
  abstract d(): void;
}



// Uso de Interfaces para estender Object

interface Object {
  log(): void;
}

Object.prototype.log = function() {
  console.log(this.toString());
}

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  nome: 'Pedro',
  toString() {
      return  this.nome;
  }
}
cli.log();

