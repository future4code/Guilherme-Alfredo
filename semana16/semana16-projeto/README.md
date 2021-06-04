# To do list
## Ferramentas 🔧

Node Js — Plataforma para construir aplicações web escaláveis;

Typescript - TypeScript é um superconjunto de JavaScript que adiciona linguagem a linguagem;

Express - Framework para Node.js que permite à aplicação lidar com multiplas e diferentes requisições http à uma URL específica;

Knex - Construtor de SQL querys para Node.js, que dentre outras funciolnalidades, propicia a criação de pool de conexao e propagação;

MySQL Workbench - Plataforma utilizada para mexer no banco de dados.

Thunder Client - Extensão do VS Code para trabalhar com as requisições. 

## Escopo do projeto 📌
O projeto desta semana consiste na criação de uma To Do List. Dessa vez, criando a parte do backend dela.

Primeiramente deve ser feito um cadastro dos usuários, pedindo: um nome, um apelido (nickname) e um email

Depois serão criadas as tarefas, que por sua vez são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

## Funcionalidades:

- É possível criar um usuário, não permitindo deixar campos vazios; 

- Cada usuário ao ser criado recebe automaticamente um ID;
 
- É possível buscar por um usuário através de seu ID;

- Os dados do usuário podem ser editados, se algum campo estiver vazio ele retorna um erro;

- Assim como usuário, é possível criar uma nova tarefa, não permitindo que campos sejam deixados vazios. 

- A tarefa criada também gera um ID. Além disso, ela informa o ID e o nickname do usuário que a criou; 

- A data é recebida no formato: DD/MM/YYYY e depois é feita a conversão necessária para salvar no banco;

- É possível buscar uma tarefa através do seu ID;

- Ao buscar uma tarefa, a data é novamente convertida para que seja mostrada no formato: DD/MM/YYYY;

- Por fim, é possível buscar uma lista de todos os usuários cadastrados. 