# Cookenu
## Ferramentas 🔧

Node Js — Plataforma para construir aplicações web escaláveis;

Typescript - TypeScript é um superconjunto de JavaScript que adiciona linguagem a linguagem;

Express - Framework para Node.js que permite à aplicação lidar com multiplas e diferentes requisições http à uma URL específica;

Knex - Construtor de SQL querys para Node.js, que dentre outras funciolnalidades, propicia a criação de pool de conexao e propagação;

MySQL Workbench - Plataforma utilizada para mexer no banco de dados.

Thunder Client - Extensão do VS Code para trabalhar com as requisições. 

## Escopo do projeto 📌
O projeto desta semana consiste na criação de uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado.

## Funcionalidades:

- É possível criar um usuário, não permitindo deixar campos vazios; 

- Cada usuário ao ser criado tem sua senha criptografada, recebe automaticamente um ID e um token de acesso;

- É possivel fazer login informando um email e senha cadastrado no banco de dados, o login também gera um token de acesso; 

- Ao fazer o login o usuário pode:

- Pesquisar seus dados de cadastro através de seu token;

- Pesquisar por dados de um outro usuário (basta informar o Id do usuário);

- Criar uma receita informando título e descrição (a receita é registrada no banco de dados com a data do dia atual);

- Pesquisar por uma receita (basta informar o Id da mesma);

- Ao pesquisar pela receita ela retorna id, título, descrição, data de criação e id do usuário que a registrou. 