

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
@logarClasseSe(false)
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

function logarClasse(constructor: Function) {
  console.log(constructor);
}

function decoratorVazio(_: Function) { }

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

// function logarClasseSe(valor: boolean) {
//   return valor ? logarClasse : decoratorVazio
// }


function decorator(obj: { a: string, b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + ' ' + obj.b)
  }
}