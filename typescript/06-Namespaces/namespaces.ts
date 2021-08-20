


//Introdução Namescpaces
console;console.log('Introdução Namescpaces');

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

namespace Areas {
  const PI = 3.14;

  export function circunferencia(raio: number): number {
    return PI * Math.pow(raio, 2);
  }

  export function retangulo(base: number, altura: number): number {
    return base * altura;
  }
}

const PI = 2.99;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);

//Namespaces Aninhados
console;console.log('Namespaces Aninhados');

// namespace Geometria {
//   export namespace Area {
//     const PI = 3.14;

//     export function circunferencia(raio: number): number {
//       return PI * Math.pow(raio, 2);
//     }

//     export function retangulo(base: number, altura: number): number {
//       return base * altura;
//     }
//   }
// }

// console.log(Geometria.Area.circunferencia(10));
// console.log(Geometria.Area.retangulo(10, 20));
// console.log(PI);


//Namespaces em Múltiplos Arquivos
console.log('Namespaces em Múltiplos Arquivos');

//Namespaces Imports
///<reference path="geometriaCirc.ts"/> 
///<reference path="geometriaRect.ts"/>


console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));

//tsc -w --outFile namespaces.js geometriaCirc.ts geomatriaRect.ts namespaces.ts


//Limitaçã dos Namespaces

