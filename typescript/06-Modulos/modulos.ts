
//Módulos
// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from './circunferencia';


// console.log(areaRetangulo(7,8));
// console.log(areaCircunferencia(2));


//Instalando SystemJs 0.x

//npm i -s systemjs@0.21.6

//Carregando Modules

// console.log('Módulo carregado');
// console.log(areaRetangulo(7,8));
// console.log(areaCircunferencia(2));


// Importantando e Exportando Módulos

import  areaRetangulo from "./retangulo"; //export default
import { areaCircunferencia as circ } from './circunferencia';


console.log(areaRetangulo(7,8));
console.log(circ(2));


//  A propriedade "module" no TSConfig

//Usando Padrão Commons.JS
// npm i -s @types/node
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));


