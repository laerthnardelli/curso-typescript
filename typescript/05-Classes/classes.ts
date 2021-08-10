
//Classes & Atributos #01
class Data {
  // Público por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data;// posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);

//Classes & Atributos #02
class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970) {
  }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Exmeplo Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params

// class Produto {
//   constructor(
//     public nome: string,
//     public preco: number,
//     public desconto: number = 0) {
//   }
// }

// const prod1 = new Produto('Caneta Bic Preta', 4.20);
// prod1.desconto = 0.06;
// console.log(prod1);

// const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
// console.log(prod2);


//Classes & Métodos

// class Produto {
//   constructor(
//     public nome: string,
//     public preco: number,
//     public desconto: number = 0) {
//   }

//   public resumo(): string {
//     return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)`;
//   }
// }

// const prod1 = new Produto('Caneta Bic Preta', 4.20);
// prod1.desconto = 0.06;
// console.log(prod1.resumo());

// const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
// console.log(prod2.resumo());



//Exercício usando o exemplo anterior de Produto - Classes & Métodos:
//Criar método precoComDesconto
//Quais são os parâmetros e o retorno?
//Alternar método resumo para mostrar o preço com desconto

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0) {
  }
  // tb é public
  precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto().toFixed(2)} (${this.desconto * 100}% off)`;
  }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.05;
console.log(prod1.resumo());

const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
console.log(prod2.resumo());


//Modificadores de Acesso - Private

// class Carro {
//   private velocidadeAtual: number = 0

//   constructor(
//     public marca: string,
//     public modelo: string,
//     private velocidadeMaxima: number = 200) {
//   }

//   private alterarVelocidade(delta: number): number {
//     const novaVelocidade = this.velocidadeAtual + delta;
//     const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

//     if (velocidadeValida) {
//       this.velocidadeAtual = novaVelocidade;
//     } else {
//       this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
//     }
//     return this.velocidadeAtual;
//   }

//   public acelerar(): number {
//     return this.alterarVelocidade(5);
//   }

//   public frear(): number {
//     return this.alterarVelocidade(-5);
//   }
// }

// const carro1 = new Carro('Ford', 'Ka', 185);

// Array(50).fill(0).forEach(() => carro1.acelerar());
// console.log(carro1.acelerar());

// Array(40).fill(0).forEach(() => carro1.frear());
// console.log(carro1.frear());


// simular "erros"
// carro1.velocidadeAtual = 300;
// console.log('atual -> ' + carro1.velocidadeAtual);

// carro1.velocidadeMaxima = 500;
// console.log('máxima -> ' + carro1.velocidadeMaxima);

// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual);



//Modificadores de Acesso - protected

//private - visivel dentro da propria classe - não é transmitido por herança
//protected - visivel dentro da propria classe e transmitido por herança
//public - visivel dentro da propria classe, transmitido por herança, e visivel para todo mundo.

// Herança #01  
class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200) {
  }

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }
    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());

// Herança #02  
class Ferrari extends Carro { //herança
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
    // ...
  }
  //sobrescrevendo
  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  //sobrescrevendo
  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());



// Getters & Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -3;
console.log(pessoa1.idade);
