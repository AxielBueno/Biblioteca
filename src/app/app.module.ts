import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { BibliotecaComponent } from './componentes/biblioteca/biblioteca.component';
import { ContatoComponent } from './componentes/contato/contato.component';

const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 2, // Alterado para 2 pq modifiquei a ideia inicial do banco, adicionando o autor!
  objectStoresMeta: [{
    store: 'livros',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'id', keypath: 'id', options: { unique: true } },
      { name: 'livro', keypath: 'livro', options: { unique: false } },
      { name: 'autor', keypath: 'autor', options: { unique: false } },
      { name: 'desc', keypath: 'desc', options: { unique: false } }
    ]
  }]
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BibliotecaComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
