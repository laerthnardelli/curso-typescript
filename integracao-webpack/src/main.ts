
//https://www.typescriptlang.org/docs/handbook/

import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('Dom Quixote', 108.80, 0.10)
// console.log(livro.precoComDesconto())

$('body').append(`<h1>${livro.nome}</h1>`);
$('body').append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`);


// Criando o Projeto TypeScript + Instalar as Dependências
//npm init -y
//tsc --init
//npm i -D webpack webpack-cli typescript ts-loader jquery @types/jquery