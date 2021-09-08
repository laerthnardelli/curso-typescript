
//https://www.typescriptlang.org/docs/handbook/gulp.html

// import Livro from './modelo/livro';

// const livro = new Livro('Dom Quixote', 108.80, 0.10);
// console.log(livro.precoComDesconto());


//Configurando a Estrutura do Build
//npm i --save-dev gulp typescript browserify tsify vinyl-source-stream del


//Usando uma Biblioteca JavaScript
//npm i --save-dev jquery @types/jquery


import $ from 'jquery'
import Livro from './modelo/livro'

const livro = new Livro('Dom Quixote', 108.80, 0.10)
// console.log(livro.precoComDesconto())

$('body').append(`<h1>${livro.nome}</h1>`);
$('body').append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`);


//Gerando JavaScript de Produção (Minificado)
//npm i --save-dev gulp-uglify gulp-rename
