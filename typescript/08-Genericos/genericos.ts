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