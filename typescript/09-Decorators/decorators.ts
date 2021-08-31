

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



// Desafio Decorator perfilAdmin
// type Construtor = { new(...args: any[]): {} }
// const usuarioLogado = {
//   nome: 'Guilherme Filho',
//   email: 'guigui@gmail.com',
//   admin: false
// }

// class MudancaAdministrativa {
//   critico() {
//       console.log('Algo crítico foi alterado!')
//   }
// }

// new MudancaAdministrativa().critico()

type Construtor = { new(...args: any[]): {} }

const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true
}

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!');
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args)
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissão!')
      }
    }
  }
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
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
cc.sacar(5248.57);
console.log(cc.getSaldo())

console.log(cc.getSaldo());


// Object.freeze() //congela o objeto, deixa ele imútavel
function congelar(alvo: any, nomeMetodo: String, descritor: PropertyDescriptor) {
  console.log(alvo);
  console.log(nomeMetodo);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo["_" + nomePropriedade];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error('Saldo Inválido');
      } else {
        alvo["_" + nomePropriedade] = valor;
      }
    }
  });
}
