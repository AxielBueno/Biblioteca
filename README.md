# Biblioteca Online

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

Este projeto procura apresentar uma database que manipula dados relacionados a livros, no atual momento, o projeto
apresenta apenas o sistema de CRUD dos livros, mas no futuro, se o projeto continuar sendo produzido, 
este mesmo irá criar estatisticas e armazenar informações mais detalhadas sobre os livros, 
em busca de poder apresentar dados relevantes aos úsuarios.

# Componentes básicos

### Farei uma breve descrição de cada componente básico:

### Home
Este componente, será utilizado como "rosto" da página, sendo o primeiro a ser apresetando ao abrir o projeto.
No mesmo está sendo apresentado breves informações ilustrativas sobre a página. Nela está presente um botão "Cadastrar"
que lhe redireciona para a página principal (Biblioteca) do projeto que será abordada mais a frente.

O botão cadastrar redireciona por meio do Routerlink.  

### Header
O Header será um componente presente em todas as páginas, tendo a função de mostrar o nome da Biblioteca 
Edens (Nome meramente ilustratitivo), e também irá possuir 4 botões, sendo ele Eden, Página Inicial, Biblioteca e Contato.

O **Botão Edens** e **Página Inicial** possuem a mesma função que é redirecionar para página Home do projeto;  

O **Botão Biblioteca** redireciona o úsuario para página biblioteca;  

E por fim , o **Botão Contato** redireciona o úsuario para uma página de contato.

### Footer
Sendo o componente mais simples, o footer apresenta apenas uma informação básica da empresa e afirma
o uso dos direitos autorais do site.

### Contato
O componente contato tem como sua utilidade, o úsuario poder enviar ticket para empresa em busca
de criticar, recomendar ou relatar algum tipo de problema que o site venha tendo.
Nele estão presentes 2 text box, sendo uma para o email e outra para o ticket em questão, logo abaixo das 
text box, existe um botão Enviar.
No código deste componente possui um service EnviarMensagem, que perdeu sua utilidade após algumas atualizações feitas
neste mesmo, mas basicamente ele só confirmaria a mensagem enviada.

O botão Enviar tem sua funcionalidade TEMPORARIA atualmente para redirecionar o úsuario até a música 
Never Gonna Give you Up do Rick Astley no Youtube. No futuro, caso o projeto de seguimento, este botão terá sua função alterada
de acordo com seu intuito de enviar o ticket.

# Componente Biblioteca
### Será descrito aqui todas informações necessarias do Componente Principal:
### Biblioteca
O Componente Biblioteca será tratado como o componente principal, já que ele possui a principal função do projeto 
que será o CRUD de livros, atualmente ele possui 3 text box, sendo respectivamente Nome (Titulo do Livro), Autor, e uma Descrição sobre o livro, 
logo abaixo, se nota o botão cadastrar, que por sua vez, apenas poderá ser acionado caso o campo de Nome e Autor estejam preenchidos, a descrição será tratada como opcional.
Após o úsuario realizar o registro do seu livro, será criado uma caixa na área de livros cadastrados, esta caixa conterá o (Nome) Por (Autor). Ainda na caixa, ela terá 3 botões, Detalhes, Editar e Deletar.

**Botão Cadastrar**: Tem como sua função subir para o banco as informações colocados no formulario de cadastramento do livro.  

**Botão Detalhes**: Sua função é basicamente abrir um modal que apresentará a descrição do livro.  

**Botão Editar**: Este botão irá abrir um modal que apresentará novamente os formularios do cadastro dos livros, desta vez já apresentando toda informação do livro cadastrado para que o úsuario possa fazer as alterações necessarias. Abaixo do formulario existe o botão salvar que irá dar um UPDATE no livro cadastrado dentro do banco.  

**Botão Deletar**: Irá apagar o livro selecionado do banco de dados.  

### Funções da Biblioteca
**carregarLivros()**
Esta função utiliza o service *buscarLivro*, pegando todos objetos livros e é utilizada para carregar todos livros selecionados.

**cadastrarLivros()**
Basicamente recebe o nome, autor e uma descrição*, e efetivamente esses atributos são colocados a um objeto livro que será salvado no banco de dados, após isto a função *carregarLivros* é chamada.
(Esta função faz uso do Service adicionarLivro)

*descrição não sendo obrigatória.

**deletarLivro()**
Uma função responsavel por deletar o livro selecionado pelo Id.
(Ela faz uso do *removerLivro*)

**detalhesLivro()**

**fecharModal()**

**editarLivro()**

**fecharModalEdicao()**

**salvarEdicao()**



# Services
### Os services tem nomes autoexplicativos, mas abaixo será detalhado cada um:
Cada um destes services vai ser chamado em biblioteca e receberam suas devidas alterações correspondetes na própria página Biblioteca.
### adicionarLivro
Este service busca criar um objeto livro dentro do banco de dados, primeiro ele cria o objeto, se der certo, o sistema indica que foi um sucesso, caso contrario será avisado um ERRO ao tentar subir para o banco o objeto.
### atualizarLivro
Neste caso busco alterar os dados de um livro já criado no banco de dados, neste caso eu quis fazer uso do observable, então no inicio do código eu abro ele com o observable (Responsavel por gerenciar acontecimentos assincronos e também retornar sucesso ou erro)
### buscarLivro
O buscarLivro busca de modo geral todos objetos livros
### buscarLivroPorId
O buscarLivroPorId diferente do anterior, especifica um livro especifico na busca baseado no Id
### removerLivro
Service que acessa o banco de dados e deleta algum objeto livro criado
# Model
O Model possui apenas 1 classe, sendo ela a classe Livro, como atributos a classe possui o id, nome, autor e desc.


