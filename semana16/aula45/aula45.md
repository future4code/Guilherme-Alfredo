## Exercicio 1

    CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        salario FLOAT NOT NULL,
        data_de_nascimento DATE NOT NULL,
        genero VARCHAR(6) NOT NULL
    );

a) 
- VARCHAR(255): este comando permite que sejam digitadas strings de até 255 caracteres;
- DATE: representa uma data. 
- NOT NULL: indica que este campo deve ser de preenchimento obrigatório. 

b) 
- SHOW DATABASES: este comando te mostra todas as suas bases de dados criadas. 
 - SHOW TABLE: este comando te mostra a lista de todas as suas tabelas dentro da sua database. 

 c) 
 - DESCRIBE: este comando + nome da tabela nos permite conferir a estrutura da tabela desejada. 


 ## Exercicio 2
 a) 

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Gloria Pires",
        1200000,
        "1963-08-23", 
        "female"
    ); 
    
b)  

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Lazaro Ramos",
        900000,
        "1963-08-20", 
        "male"
    ); 
    Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.172 sec. 

Este erro informa que não é possivel inserir esta query na tabela por que tem o mesmo número de uma "PRIMARY KEY" já existente. 

c) 

    INSERT INTO Actor (id, name, salary)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );  
    Error Code: 1136. Column count doesn't match value count at row 1	0.156 sec

 Este erro acontece porque existem informações a mais do que as descritas dentro dos parênteses (id, name, salary).

d) 

    INSERT INTO Actor (id, salary, birth_date, gender)
    VALUES(
        "004",
        400000,
        "1949-04-18", 
        "male"
    );
    Error Code: 1364. Field 'name' doesn't have a default value	0.187 sec
Este erro ocorre porque o não foi inserido um valor para o "name" e ele é um campo de preenchimento obrigatório. 

e) 

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        1979-03-26, 
        "female"
    );
    Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.157 sec

Ele está reclamando que o valor da "birth_date" está incorreto, isso porque ele esperava uma string (VARCHAR(255).

f) 

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004", 
        "Antônio Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );


## Exercicio 3 
a) Query que retorna informações das atrizes:

    SELECT * from Actor WHERE gender = "female"

b) Query que etorna o salário do ator com o nome Tony Ramos:

    SELECT salary from Actor WHERE name = "Tony Ramos"

c) Query que retorne todas as informações que tenham o gender com o valor "invalid". No resultado volta tudo Null, porque não existe nenhum ator/atriz na tabela com o gender = "invalid".

    SELECT * from Actor WHERE gender = "invalid";

d) Query que retorna o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

    SELECT id, name, salary from Actor WHERE salary <= 500000;

e) 
    
    Error Code: 1054. Unknown column 'nome' in 'field list'	0.156 sec

    Esta mensagem idica um erro de sintaxe, onde está escrito "nome" deveria estar escrito "name". 
    Comando correto:
    SELECT id, name from Actor WHERE id = "002"

## Exercicio 4 
a) Esta query mostra todas as informações de atores que começam com a letra "A" ou letra "J" que possuem um salário superior a 300000. 

    SELECT * FROM Actor
    WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000


b) Esta query filtra os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

    SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;

c) Esta query mostra os atores que possuam "G" ou "g" em qualquer parte do nome. 

    SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

d) Esta query filtra os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00

    SELECT * FROM Actor
    WHERE 
    (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;


## Exercicio 5 
a)

    CREATE TABLE Movie (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        synopsis TEXT NOT NULL,
        release_Date DATE NOT NULL,
        rating INT NOT NULL
    );

b) 

    INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    VALUES(
        "001", 
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06", 
        7
    );

c) 

        INSERT INTO Movie (id, title, synopsis, release_Date, rating)
        VALUES(
        "002", 
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27", 
        10
        );

d) 

    INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    VALUES(
        "003", 
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02", 
        8
    );

e) 

    INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    VALUES(
        "004", 
        "Cidade de Deus",
        "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, onde a violência aparenta ser infinita.",
        "2002-08-30", 
        10
    );

## Exercicio 6 

a) Query que retorna os dados de um filme a partir do id indicado

    SELECT id, title, rating FROM Movie WHERE id = "002";

b) Query que retorna as informações de um filme a partir do seu nome

    SELECT * FROM Movie WHERE title = "Cidade de Deus";

c) Query que filtra o id, título e sinopse dos filmes com avaliação mínima de 7

    SELECT id, title, synopsis FROM Movie WHERE rating > 7;

## Exercicio 7 
a) Retorna um filme cujo título contenha a palavra vida:

    SELECT * FROM MovieWHERE title LIKE "%vida%";

b) Pesquisa se o termo de busca está contido no título ou na sinopse:

    SELECT * FROM Movie WHERE title LIKE "%Deus%" OR synopsis LIKE "%Deus%";

c) Filtra os filmes já lançados

    SELECT * FROM Movie WHERE release_date < "2021-05-24";

d) Filtra os filmes que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7:

    SELECT * FROM Movie
    WHERE release_date < "2021-05-24" AND 
      (title LIKE "%jovem%" OR
      synopsis LIKE "%jovem%") AND rating > 7;

