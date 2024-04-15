O projeto se trata de uma API que gerencia videos, com rotas de criacao, listagem, atualização e delete de videos usando banco de dados PostGrees

## npm init -y
Ao criar o package.json, setar "type: module" para entendimento do ES6 

## Fastify 

Micro framework -- Com serviços apenas essenciais como funcionalidades comuns (GET, POST, DELETE, PATCH, PUT)
--> npm install fastify

## PostGres 

Banco de dados usado no projeto

Projeto aberto pelo site Neon.tech, e biblioteca instalada com o comando: npm install postgres
 
A biblioteca servira para facilitar a conexao com o bd

Detalhe para a criação de variaveis de ambiente para os diferentes acessos em prod, des, e hml

## dotenv

Biblioteca instalada para lidar com a conexao de bd via variaveis de ambiente 
No node 20, ja ha suporte para linkar as variaveis, porem estou usando uma library chamada dotenv que foi instalada com:

`npm install dotenv -D`


## Operacoes basicas (CRUD)

Create, Read, Update, Delete

GET -> Listagem
POST -> Criação
PUT -> Alteração
DELETE -> Remoção
PATCH -> Altera uma pequena info

Alem das rotas, temos os Route Parameters --> 
Parametro enviado na rota para atualizar um video especifico por exemplo

// PARA POST E PUT
Request Body --> Envio o corpo da requisição, e esse corpo é onde sao enviados dados de um form por exemplo

// PARA BUSCAR ALGO MAIS ESPECIFICO
Query params --> Envio pelos parametros uma busca especifica (como uma palavra por exemplo
)