# LabeBank
## Ferramentas 🔧

Thunder Client - Extensão do VS Code para trabalhar com as requisições. 

## Escopo do projeto 📌
Um dos bancos mais famosos do brasil, o LabeBank, está passando por alguns problemas sérios de performance em suas aplicações. Isso significa que as movimentações financeiras que passam pelos seus sistemas estão muito lerdas: que é muito preocupante já que impede a empresa de ter novos usuários e crescer. Tendo isto em mente, o LabeBank decidiu elaborar um concurso para uma POC de um sistema bancário usando Typescript.

POC é uma sigla que significa "Proof of Concept" ("Prova de Conceito" em tradução livre). É muito comum fazermos uma POC quando queremos apresentar uma nova tecnologia ou arquitetura para uma empresa, com o objetivo de convencê-la a utilizá-las. Uma POC, normalmente, não é muito complexa, mas deve possuir todas as funcionalidades básicas que permitam concluir se o conceito utilizado é válido para resolver o problema ou não. 

Com isso tudo em mente, você deve implementar uma POC com o objetivo de ganhar esta competição. Descrevemos, abaixo, todas as funcionalidades que a LabeBank precisa e logo depois as etapas de desenvolvimento para os requisitos mínimos deste projeto.

## Funcionalidades:

- Um usuário pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: **nome**, **CPF** e **data de nascimento**. As contas devem guardam essas informações e uma propriedade para representar o **saldo** do usuário. Além disso, são guardados, também, todos os gastos do usuário em seu **extrato** (possuindo o **valor**, a **data** e uma **descrição**). 

- As contas, ao serem criadas, começam com o saldo zerado. 

- Não podem existir dois usuários diferentes com o mesmo CPF.

- O usuário consegue verificar o saldo da sua conta, passando o seu nome e o seu CPF.

- O usuário consegue também adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.

- É possivel verificar todos os usuários que já tem uma conta no banco. 