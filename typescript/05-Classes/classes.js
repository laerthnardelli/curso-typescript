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
// simular "erros"
// carro1.velocidadeAtual = 300;
// console.log('atual -> ' + carro1.velocidadeAtual);
// carro1.velocidadeMaxima = 500;
// console.log('máxima -> ' + carro1.velocidadeMaxima);
// carro1.alterarVelocidade(150)
// console.log('atual -> ' + carro1.velocidadeAtual);
//# sourceMappingURL=classes.js.map