

//Creating Class Decorator
console.log('Decorator');

@locarClasse
class Eletrodomestico {
  constructor() {
    console.log('novo...');
  }
}

function locarClasse(constructor: Function) {
  console.log(constructor);
}