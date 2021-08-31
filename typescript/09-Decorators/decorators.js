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
//@decorator({ a: 'Teste', b: 123 })
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarClasseSe(false)
], Eletrodomestico);
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
// function logarClasseSe(valor: boolean) {
//   return valor ? logarClasse : decoratorVazio
// }
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
//# sourceMappingURL=decorators.js.map