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

