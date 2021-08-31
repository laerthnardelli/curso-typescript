"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Creating Class Decorator
console.log('Decorator');
// @locarClasse
// class Eletrodomestico {
//   constructor() {
//     console.log('novo...');
//   }
// }
// function locarClasse(constructor: Function) {
//   console.log(constructor);
// }
// Decorator Factory 
//// @decorator({ a: 'Teste', b: 123 })
// @logarClasseSe(false)
// class Eletrodomestico {
//   constructor() {
//     console.log('novo...');
//   }
// }
// function logarClasse(constructor: Function) {
//   console.log(constructor);
// }
// function decoratorVazio(_: Function) { }
// function logarClasseSe(valor: boolean) {
//   return valor ? logarClasse : decoratorVazio
// }
// // function logarClasseSe(valor: boolean) {
// //   return valor ? logarClasse : decoratorVazio
// // }
// function decorator(obj: { a: string, b?: number }) {
//   return function (_: Function): void {
//     console.log(obj.a + ' ' + obj.b)
//   }
// }
//Alterando Construtor com Decorator de Classe
// @logarObjeto
// class Eletrodomestico {
//   constructor() {
//     console.log('novo...');
//   }
// }
// type Construtor = { new(...args: any[]): {} }
// function logarObjeto(construtor: Construtor) {
//   console.log('Carregado...')
//   return class extends construtor {
//     constructor(...args: any[]) {
//       console.log('Antes...')
//       super(...args)
//       console.log('Depois...')
//     }
//   }
// }
// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()
// Adicionando Método com Decorator de classe
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//# sourceMappingURL=decorators.js.map