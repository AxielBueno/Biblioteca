import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  mensagemEnviada: boolean = false; //variavel que vai controlar se a mensagem foi enviada

  constructor() { }

  enviarMensagem() {
    this.mensagemEnviada = true; //basicamente só é uma função pra mostrar que a mensagem foi enviada hehe
  }
}
