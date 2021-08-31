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
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
//Decorator de Método
// class ContaCorrente {
//   private saldo: number;
//   constructor(saldo: number) {
//     this.saldo = saldo;
//   }
//   @congelar
//   sacar(valor: number) {
//     if (valor <= this.saldo) {
//       this.saldo -= valor;
//       return true;
//     } else {
//       return false;
//     }
//   }
//   @congelar
//   getSaldo() {
//     return this.saldo;
//   }
// }
// const cc = new ContaCorrente(10248.57);
// cc.sacar(5000);
// console.log(cc.getSaldo())
// // cc.getSaldo = function() {
// //     return this['saldo'] + 7000;
// // }
// console.log(cc.getSaldo());
// // Object.freeze() //congela o objeto, deixa ele imútavel
// function congelar(alvo: any, nomeMetodo: String, descritor: PropertyDescriptor) {
//   console.log(alvo);
//   console.log(nomeMetodo);
//   descritor.writable = false;
// }
//Decorator de Atributo
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
console.log(cc.getSaldo());
console.log(cc.getSaldo());
// Object.freeze() //congela o objeto, deixa ele imútavel
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Inválido');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
//# sourceMappingURL=decorators.js.map