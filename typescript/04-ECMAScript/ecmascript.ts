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

