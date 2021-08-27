"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// Usando Generics com Array #01 - Generics disponíveis na API
console.log('Usando Generics com Array #01');
const avaliacoes = [10, 9.3, 7.7]; // a classe array foi definida como generica, porem na hora de usar eu especifico o tipo (amarro o tipo).
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);
// Usando Generics com Array #02
console.log('Usando Generics com Array #02');
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
// Tipo Função com Genérico 
console.log('Tipo Função com Genérico');
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics #01
// console.log('Class com Generics #01');
// class OperacaoBinaria {
//   constructor(public operando1: any,
//     public operando2: any) { }
//   executar() {
//     return this.operando1 + this.operando2; //não gera nenhum tipo de validação
//   }
// }
// console.log(new OperacaoBinaria('Bom ', 'dia').executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, 'Opa').executar());
// console.log(new OperacaoBinaria({}, null).executar());
// Class com Generics #02
console.log('Class com Generics #02');
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());
// Class com Generics #03
console.log('Class com Generics #03');
class DataNew {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new DataNew(1, 2, 2020);
const d2 = new DataNew(5, 5, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Exemplo Classes com Generics
// Exemplo Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
// class Fila<T> {
//   private fila: Array<T>
//   constructor(...args: T[]) {
//     this.fila = args;
//   }
//   entrar(elemento: T) {
//     this.fila.push(elemento);
//   }
//   proximo(): T | null {
//     if (this.fila.length >= 0 && this.fila[0]) {
//       const primeiro = this.fila[0];
//       this.fila.splice(0, 1);
//       return primeiro;
//     } else {
//       return null;
//     }
//   }
//   imprimir() {
//     console.log(this.fila);
//   }
// }
// const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu');
// fila.imprimir();
// fila.entrar('Rafael');
// fila.imprimir();
// console.log(fila.proximo());
// console.log(fila.proximo());
// console.log(fila.proximo());
// fila.imprimir();
// Restrições (Constraints);
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
const novaFila = new Fila(1, 2, 3);
novaFila.imprimir();
// const outraFila = new Fila<boolean>(true, false) // não funciona porque não esta acresentado na minha fila 
//# sourceMappingURL=genericos.js.map