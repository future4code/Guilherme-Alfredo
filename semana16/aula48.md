## Exercício 1 

a) Chave estrangeira (Foreign Key) é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes: 

    CREATE TABLE Rating (
        id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
        rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id)
    );


    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
        "001",
        "Melhor filme brasileiro já feito!",
        10,
        "004"
    );

    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
        "002",
        "Excelente filme, retrata muito bem a realidade das favelas do Brasil!",
        8,
        "003"
    );
    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
        "003",
        "Muito bom!",
        7,
        "002"
    );
    INSERT INTO Rating (id, comment, rate, movie_id) 
    VALUES (
        "004",
        "Deixou a desejar",
        4,
        "001"
    );

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114549-guilherme-alfredo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ele retorna este erro, porque não é possivel fazer a referencia já que o id que ele busca na outra tabela não existe. 

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

    ALTER TABLE Movie DROP COLUMN rating;

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114549-guilherme-alfredo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Ele não permite apagar um filme com avaliação por conta da outra tabela que depende da tabela de filmes, se o filme for excluído a sua presença na outra tabela perderia o sentido. Para isso precisariamos apagar ele da tabela de avaliação antes. 

## Exercício 2 

a) Esta é uma tabela intermediária que tem apenas duas colunas, e duas FK. Isso para poder unir duas tabelas em que a relação é N:M. No caso em questão é porque um ator pode fazer mais de um filme e um filme pode ter mais de um ator. 

    CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

b) Crie, ao menos, 6 relações nessa tabela.

    INSERT INTO MovieCast VALUES
    ("001", "001"),
    ("001", "004"),
    ("002", "003"),
    ("002", "001"),
    ("003", "002"),
    ("004", "001");

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query.

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114549-guilherme-alfredo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Ele não permite e retorna este erro, uma vez que o ator que ele busca na outra tabela não existe. 

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query.

    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114549-guilherme-alfredo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

ELe não permite que seja apagado porque este ator já está relacionado com uma segunda tabela que "depende" da primeira. 

## Exercício 3 

a) Explique, com suas palavras, a query acima. O que é o operador ON?

O operador ON é a verificação que deve ser feita. Por exemplo, na query abaixo ele irá retornar os dados de quando o id do filme for correspondente ao id da sua avaliação. 

    SELECT * FROM Movie 
    INNER JOIN Rating ON Movie.id = Rating.movie_id;

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

    SELECT title, Movie.id, Rating.rate 
    FROM Movie
    JOIN Rating
    ON Movie.id = movie_id;

## Desafios

## Exercício 4 

a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário.

    SELECT Movie.id, Movie.title, Rating.rate, Rating.comment
    FROM Movie
    LEFT JOIN Rating
    ON Movie.id = movie_id;

b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator.

    SELECT Movie.id, Movie.title, Actor.id
    FROM Actor, Movie
    LEFT JOIN MovieCast
    ON Movie.id = movie_id;