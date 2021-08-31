

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

@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  }
}

//(<any>new Eletrodomestico()).imprimir();

interface Eletrodomestico {
  imprimir?(): void
}

const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir();

