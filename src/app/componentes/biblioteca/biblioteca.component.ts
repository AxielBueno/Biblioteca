import { Component, OnInit } from '@angular/core';
import { Key, NgxIndexedDBService } from 'ngx-indexed-db';
import { Livro } from 'src/app/app-core/model/livro';
import { LivroService } from 'src/app/app-core/services/livro.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent implements OnInit {
  novoLivro = { nome: '', autor: '', descricao: '' }; // Armazena dados do livro que foi cadastrado
  livros: Livro[] = []; // Um array que guarda os livros cadastrados
  showModalDetalhes = false;
  showModalEdicao = false;
  livroSelecionado: Livro = { id: 0, nome: '', autor: '', desc: '' }; // Aqui é armezenado o livro selecionado para Edição ou Detalhes

  constructor(private livroService: LivroService, private dbService: NgxIndexedDBService) { }

  ngOnInit(): void {
    this.carregarLivros(); //metodo que carrega os livros cadastrados ao iniciar o componente
  }

  carregarLivros() {    // metodo que carrega os livros
    this.livroService.buscarLivros().subscribe(
      (livros: unknown[]) => {
        this.livros = livros as Livro[];
      },
      error => {
        console.error('Erro ao carregar livros:', error);
      }
    );
  }

  cadastrarLivro() {      // metodo usado para cadastrar os livros
    this.livroService.adicionarLivro(this.novoLivro.nome, this.novoLivro.autor, this.novoLivro.descricao);
    this.novoLivro = { nome: '', autor: '', descricao: '' };
    this.carregarLivros();
  }

  deletarLivro(livro: Livro) {    // metodo para deletar o livro já cadastrado
    if (livro.id) {
      this.livroService.removerLivro(livro.id);
      console.log('Livro deletado com sucesso!');
      this.carregarLivros();
    } else {
      console.error('Erro ao deletar:', livro);
    }
  }

  detalhesLivro(livro: Livro) {   // metodo que exibe o detalhe do livro
    this.livroSelecionado = livro;
    this.showModalDetalhes = true;
  }

  fecharModalDetalhes() {   // só um metodo que fecha o modal
    this.showModalDetalhes = false;
  }

  editarLivro(livro: Livro) {   // metodo que exibe a edição do livro
    this.livroSelecionado = { ...livro };
    this.showModalEdicao = true;
  }

  fecharModalEdicao() {   // só um metodo que fecha o modal
    this.showModalEdicao = false;
    this.livroSelecionado = { id: 0, nome: '', autor: '', desc: '' };
  }

  salvarEdicao() {   // Por fim, metodo que salva no banco as alterações feitas
    if (this.livroSelecionado.id) {
      this.livroService.atualizarLivro(this.livroSelecionado).subscribe(
        () => {
          console.log('Livro editado:', this.livroSelecionado);
          this.carregarLivros();
          this.showModalEdicao = false;
        },
        error => {
          console.error('Erro ao atualizar livro:', error);
        }
      );
    }
  }

}
