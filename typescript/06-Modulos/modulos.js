"use strict";
//Módulos
// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from './circunferencia';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(areaRetangulo(7,8));
// console.log(areaCircunferencia(2));
//Instalando SystemJs 0.x
//npm i -s systemjs@0.21.6
//Carregando Modules
// console.log('Módulo carregado');
// console.log(areaRetangulo(7,8));
// console.log(areaCircunferencia(2));
// Importantando e Exportando Módulos
const retangulo_1 = __importDefault(require("./retangulo")); //export default
const circunferencia_1 = require("./circunferencia");
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
//  A propriedade "module" no TSConfig
//Usando Padrão Commons.JS
// npm i -s @types/node
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map