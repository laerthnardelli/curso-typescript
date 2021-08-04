//let & const #01
let seraQuePode = '?';
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = 'Colocar o casaco!';
  console.log(acao);
}

const cpf: string = '123.456.000-99';
//cpf = '789.101.132-78';
console.log(cpf);

//let & const #02

var segredo = 'externo!';
function revelar() {
  let segredo = 'interno'; //escopo de função, pode usar let ou var
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  const def = 'def'; //escopo de bloco
  console.log(def);
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}
//console.log(i);

// Arrow Function #01

// const somar = function (n1: number, n2: number): number {
//   return n1 + n2
// }

function somar(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2, 3));

// Arrow Function #02

const saudacao = () => console.log("Olá!");
saudacao();

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa);
falarCom('João');

// this

// function normalComThis() {
//     console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' });
// normalComThisEspecial();

// // this???
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();

// const arrowComThisEspecial = arrowComThis.bind({ nome: 'Ana' });
// arrowComThisEspecial();

// Default parameters - Parâmetros padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(3);


// Operador Spread & Rest #01

const numbers = [1, 10, 99, -5, 200, 1034];
//console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]));
console.log(Math.max(...numbers)); //espalha como parametro da função max

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', ...turmaA, 'Miguel', 'Lorena'];
console.log(turmaB);

// Operador Spread & Rest #02

// function retornarArray(arg1: number, arg2: number): number[] {
//   return [arg1, arg2];
// }
//  const numeros = retornarArray(1, 2);
// console.log(numeros);

function retornarArray(...args: number[]): number[] {
  return args; //rest
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers)); //Spread


// Operador Spread & Rest #03 (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false];
console.log(tupla);

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  // console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

// Destructuring (objeto)
const item = {
  nome: 'SSD 480GB',
  preco: 200,
  caracteristicas: {
    w: 'Importado'
  }
}

const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);

const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);

//Template String
const usuarioID: string = 'SuporteCod3r';
const notificacoes: string = '19';
// const boasVindas = 'Boas vindas ' + usuarioID +
//     'Notificações: ' + notificacoes

const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;

console.log(boasVindas);
console.log(`${(1 + 1) * 30}`);
console.log(`Motor: ${caracteristicas[0]}`);