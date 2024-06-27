export class Livro {
  id?: number;
  nome: string;
  autor: string;
  desc: string;

  constructor(nome: string, autor: string, desc: string) {
    this.nome = nome;
    this.autor = autor;
    this.desc = desc;
  }
}
