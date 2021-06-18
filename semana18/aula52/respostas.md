## Exercício 1

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

    Round é o tempo de "espera" que impede que o usuário consiga utilizar da força bruta e testar infinitos logins em um período curto. Já o salt é um dado aleatório que é usado para proteger as senhas em um armazenamento. Eu utilizei o valor de 12segundos porque é o padrão, uma vez que não é tão alto a ponto de deixar um tempo de espera muito grande por parte do usuário, e nem tão baixo a ponto de o usuário poder testar milhoes de senhas de uma vez. 


## Exercício 2 

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

    Primeiro deve-se modificar o cadastro e depois o login, pois para testar é preciso primeiro criar uma senha e depois verificá-la.


