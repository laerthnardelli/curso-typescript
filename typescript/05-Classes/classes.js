"use strict";
//Classes & Atributos #01
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
//Classes & Atributos #02
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
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
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // tb é public
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
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
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(40).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
// Herança #02  
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
        // ...
    }
    //sobrescrevendo
    acelerar() {
        return this.alterarVelocidade(20);
    }
    //sobrescrevendo
    frear() {
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
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
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
// Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));
console.log(Matematica.areaCirc(4));
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total * atual);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado()); //14
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado()); //120
//Construtor Privado & Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//errado
// const errado = new Unico();
//correto
console.log(Unico.getInstance().agora());
//# sourceMappingURL=classes.js.map