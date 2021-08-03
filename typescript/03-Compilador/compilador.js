"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
//canal = inscritos
console.log("Canal = " + canal);
//let nome: string = 'Pedro'; //da erro porque já foi declaro em outro aruivo, tudo dentro do mesmo escopo
nome = 'pedro';
console.log("Nome = " + nome);
// (function () {
//   let nome: string = 'Ana';
//   console.log(`Nome = ${nome}`); //se refere a um contexto diferete,
// })();
function soma(a, b) {
    return a + b;
}
// noImplicitAny
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//# sourceMappingURL=compilador.js.map