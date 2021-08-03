let canal: string = 'Gaveta';
let inscritos: number = 610234;

//canal = inscritos
console.log(`Canal = ${canal}`);

//let nome: string = 'Pedro'; //da erro porque já foi declaro em outro aruivo, tudo dentro do mesmo escopo

nome = 'pedro';
console.log(`Nome = ${nome}`);

// (function () {
//   let nome: string = 'Ana';
//   console.log(`Nome = ${nome}`); //se refere a um contexto diferete,
// })();


function soma(a: any, b: any) {
  return a + b;
}


// noImplicitAny
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

//"strictNullChecks", "noUnusedParameters" e "noUnusedLocals"
function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = 'Bom dia!';
  } else {
    saudacao = 'Tenha uma boa vida!';
  }
  return saudacao;// causa erro por causa da flag "strictNullChecks": true, porque ela vem como true por padrão
}