
//Módulos
import { areaRetangulo } from "./retangulo";
import { areaCircunferencia } from './circunferencia';


console.log(areaRetangulo(7,8));
console.log(areaCircunferencia(2));


//Instalando SystemJs 0.x

//npm i -s systemjs@0.21.6

//Carregando Modules

console.log('Módulo carregado');
console.log(areaRetangulo(7,8));
console.log(areaCircunferencia(2));