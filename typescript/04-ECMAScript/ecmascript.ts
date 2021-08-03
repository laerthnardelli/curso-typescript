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

