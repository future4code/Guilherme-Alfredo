## Exercício 1 

a) Esta query remove a coluna salary da tabela

    ALTER TABLE Actor DROP COLUMN salary;

b) Esta query troca o nome da coluna de "gender" para "sex" e o tipo agora vai ser uma string de 6 dígitos. 

    ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

c) Esta query mantém o nome da coluna gender e altera o tipo para uma string que aceita até 255 dígitos. 

    ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

d) Esta query mantém o nome da coluna gender e altera o tipo para uma string que aceita até 100 dígitos. 

    ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


## Exercício 2 

a) Query que atualiza o nome e data de nascimento do item que contém id 3. 

    UPDATE Actor
    SET name = "Wagner Moura", birth_date = "1964-10-01"
    WHERE id = "003";       

b) Query que atualize o nome da atriz Juliana Paes para JULIANA PAES e outra query para voltar ao nome anterior.

    UPDATE Actor 
    SET name = "JULIANA PAES"
    WHERE name = "Juliana Paes"

    UPDATE Actor 
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PAES"

c) Query que atualize todas as informações do ator com o id 005

    UPDATE Actor
    SET name = "Gil Brother", 
        birth_date = "1960-02-10", 
        salary = 7700000, 
        gender = "male"
    WHERE id = "005";

d) Se eu tento atualizar um dado que não existe ele volta um erro avisando que não existe. 

    Error Code: 1054. Unknown column 'favourite_color' in 'field list'

## Exercício 3 

a)  Query que apaga a atriz com o nome Fernanda Montenegro. 

    DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) Query que apaga todos os atores (do gênero male) com o salário maior do que R$1.000.000,00. 

    DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

## Exercicio 4 

a) Query que pegue o maior salário de todos os atores e atrizes.

    SELECT MAX(salary) FROM Actor 

b) Query que pegue o menor salário das atrizes.

    SELECT MIN (salary) FROM Actor 
    WHERE gender = "female" 


c) Query que pegue a quantidade de atrizes.

    SELECT COUNT(*) FROM Actor
    WHERE gender = "female"

d) Query que pegue a soma de todos os salários.

    SELECT SUM(salary) FROM Actor

## Exercício 5 

a) Esta query nos retorna o número de pessoas de cada gênero presentes na tabela. 

    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender

b) Query que retorna somente o id e o nome dos atores em ordem decrescente alfabética

    SELECT id, name FROM Actor
    ORDER BY name DESC;

c) Query que retorna todos os atores ordenados pelo salário

    SELECT * FROM Actor
    ORDER BY salary;

d) Query que retorna os atores com os três maiores salarios

    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;

e) Query que retorna a média de salário por gênero

    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;

## Exercício 6 

a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

    ALTER TABLE Movie ADD playing_limit_date DATE;

b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.

    ALTER TABLE Movie CHANGE rating rating FLOAT;

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído.

    UPDATE Movie
    SET
    playing_limit_date = "2021-12-31"
    WHERE id = "001";

    UPDATE Movie
    SET
    playing_limit_date = "2021-03-31"
    WHERE id = "002";

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

    DELETE FROM Movie WHERE id = "003"

    UPDATE Movie
    SET
    synopsis = "teste de atualização"
    WHERE id = "003"

Neste caso ele permite que a sinopse seja atualizada mesmo depois de deletar o filme pelo id. 

## Exercício 7 
Queries que respondem as perguntas abaixo 

a) Quantos filmes em cartaz possuem avaliações maiores do que 7.5?

    SELECT COUNT(*) AS "numero de filmes com avaliação superior a 7.5" FROM Movie WHERE rating > 7.5;

b) Qual a média das avaliações dos filmes?

    SELECT AVG(rating) AS "media avaliação" FROM Movie;

c) Qual a quantidade de filmes em cartaz?

    SELECT COUNT(*) AS "numero de filmes em cartaz" FROM Movie WHERE playing_limit_date > CURDATE();

d) Qual a quantidade de filmes que ainda irão lançar?

    SELECT COUNT(*) AS "numero de filmes que irão lançar"FROM Movie WHERE release_date > CURDATE();

e) Qual a maior nota dos filmes?

    SELECT MAX(rating) AS "maior nota de filmes" FROM Movie;

f) Qual a maior nota dos filmes?

    SELECT MIN(rating)AS "menor nota de filmes" FROM Movie;

## Exercício 8 

a) Query que retorna todos os filmes em ordem alfabética.

    SELECT * FROM Movie ORDER BY title;

b) Query que retorna os 5 primerios filmes em ordem descrente alfabética.

    SELECT * FROM Movie ORDER BY title LIMIT 5;

c) Query que retorna os 3 filmes mais recentes em cartaz.

    SELECT * FROM Movie 
    WHERE release_date < CURDATE() 
    ORDER BY release_date DESC 
    LIMIT 2;

d) Query que retorna os 3 filmes melhor avalidos.

    SELECT * FROM Movie 
    ORDER BY rating DESC 
    LIMIT 3;
