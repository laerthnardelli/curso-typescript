"use strict";
// Exercício 1 - Classe - Refatorar para TS
// function Moto(nome) {
//   this.nome = nome
//   this.velocidade = 0
//   this.buzinar = function() {
//       console.log('Toooooooooot!')
//   }
//   this.acelerar= function(delta) {
//       this.velocidade = this.velocidade + delta
//   }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    //public velocidade: number = 0;
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('Toooooooooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercício 2 - Herança
// var objeto2D = {
//   base: 0,
//   altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//   return this.base * this.altura
// }
// console.log(retangulo.area())
// Exercício 2 - Herança
class Objeto2D {
    //public base: number = 0;
    //public altura: number = 0;
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
retangulo.base = 10;
// retangulo.altura = 7;
console.log(retangulo.area());
// Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//       return this._primeiroNome
//   },
//   set: function (valor) {
//       if (valor.length >= 3) {
//           this._primeiroNome = valor
//       } else {
//           this._primeiroNome = ''
//       }
//   },
//   enumerable: true,
//   configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'La'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Laerth'
// console.log(estagiario.primeiroNome)
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'La';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Laerth';
console.log(estagiario.primeiroNome);
//# sourceMappingURL=desafio.js.map