import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Livro } from '../model/livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  constructor(private dbService: NgxIndexedDBService) {}

  // Adiciona um livro ao banco :)
  adicionarLivro(nome: string, autor: string, descricao: string) {
    const novoLivro = new Livro(nome, autor, descricao);

    this.dbService.add('livros', novoLivro).subscribe(
      () => {
        console.log('Livro adicionado com SUCESSOOO!!!');
      },
      error => {
        console.error('Erro ao adicionar livro:', error);
      }
    );
  }

//Um metodo para atualizar os livroos hehe
  atualizarLivro(livro: Livro): Observable<void> {
    return new Observable<void>((observer) => {
      this.dbService.update('livros', livro).subscribe(
        () => {
          console.log('Livro atualizado com SUCESSOO!!!');
          observer.next();
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  // Busca generalizada, busca tudo!
  buscarLivros(): Observable<Livro[]> {
    return this.dbService.getAll('livros');
  }

  // Uma busca especifica caso precise, buscando por ID
  buscarLivroPorId(id: number): Observable<Livro> {
    return this.dbService.getByID('livros', id);
  }

  // Remove o livro do Banco!
  removerLivro(id: number) {
    this.dbService.delete('livros', id).subscribe(
      () => {
        console.log('Livro removido com SUCESSOOOOOO!!!');
      },
      error => {
        console.error('Erro ao remover livro:', error);
      }
    );
  }
}
