function echo(objeto: any) {
  return objeto;
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
  return objeto;
}

console.log(echoMelhorado('João').length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);


// Usando Generics com Array #01 - Generics disponíveis na API
console.log('Usando Generics com Array #01');

const avaliacoes: Array<number> = [10, 9.3, 7.7]; // a classe array foi definida como generica, porem na hora de usar eu especifico o tipo (amarro o tipo).
avaliacoes.push(8.4);
// avaliacoes.push('5.5');
console.log(avaliacoes);


// Usando Generics com Array #02
console.log('Usando Generics com Array #02');

function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['Ana', 'Bia', 'Carlos']);
imprimir<{ nome: string, idade: number }>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 }
]);

type Aluno = { nome: string, idade: number };
imprimir<Aluno>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 }
]);

// Tipo Função com Genérico 
console.log('Tipo Função com Genérico');

// type Echo = (data: any) => any;
// const chamarEcho: Echo = echoMelhorado;
// console.log(chamarEcho('Alguma coisa'));

type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>('Alguma coisa'));

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


abstract class OperacaoBinaria<T, R>{
  constructor(public operando1: T,
    public operando2: T) { }

  abstract executar(): R; //return this.operando1 + this.operando2; //passou a reclamar que não tem como fazer uma soma para todos os tipo genericos do JS
}

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());
console.log(new SomaBinaria(30, 434).executar());

// Class com Generics #03
console.log('Class com Generics #03');


class DataNew {
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

class DiferencaEntreDatas
  extends OperacaoBinaria<DataNew, string> {
  getTime(data: DataNew): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
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

class Fila<T> {
  private fila: Array<T>

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T) {
    this.fila.push(elemento);
  }

  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('Rafael');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();

