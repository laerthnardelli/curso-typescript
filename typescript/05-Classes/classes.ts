
//Classes & Atributos #01
class Data {
  // Público por padrão
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data;// posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);

//Classes & Atributos #02
class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970) {
  }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta; // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);

// Exmeplo Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três params

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0) {
  }
}

const prod1 = new Produto('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1);

const prod2 = new Produto('Caderno Escolar', 18.80, 0.15);
console.log(prod2);



