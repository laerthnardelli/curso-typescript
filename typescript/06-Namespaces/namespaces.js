"use strict";
//Introdução Namescpaces
console;
console.log('Introdução Namescpaces');
/* Escopo global da função
  const PI = 3.14;

  function areaCircunferencia(raio: number): number {
    return PI * Math.pow(raio, 2);
  }

   function areaRetangulo(base: number, altura: number): number {
    return base * altura;
  }

console.log(areaCircunferencia(10));
console.log(areaRetangulo(10, 20));
console.log(PI);

*/
var Areas;
(function (Areas) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
const PI = 2.99;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);
//Namespaces Aninhados
console;
console.log('Namespaces Aninhados');
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
console.log(PI);
//# sourceMappingURL=namespaces.js.map