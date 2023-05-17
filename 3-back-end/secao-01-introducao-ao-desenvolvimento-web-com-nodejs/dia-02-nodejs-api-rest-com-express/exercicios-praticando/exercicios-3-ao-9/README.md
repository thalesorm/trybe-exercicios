
Crie o diretório  `src`  e dentro dele um arquivo  `movies.json`  com o os filmes da nossa locadora:

Copiar

```json
1[
2  {
3    "id": 1,
4    "movie": "Avatar",
5    "price": 5
6  },
7   {
8    "id": 2,
9    "movie": "Gente Grande",
10    "price": 2
11  },
12  {
13    "id": 3,
14    "movie": "O Jogo",
15    "price": 3
16  },
17  {
18    "id": 4,
19    "movie": "Quebrando a Banca",
20    "price": 5
21  },
22  {
23    "id": 5,
24    "movie": "Lilo & Stitch",
25    "price": 2
26  },
27  {
28    "id": 6,
29    "movie": "Os Fantasmas se Divertem",
30    "price": 2
31  },
32  {
33    "id": 7,
34    "movie": "Meninas Malvadas",
35    "price": 3
36  }
37]
```

Agora, faça os exercícios a seguir:

## 🚀 Exercício 3

Crie um servidor Node.js utilizando o framework Express.

## 🚀 Exercício 4

Crie uma função de leitura do JSON com o modulo  _fs_.

## 🚀 Exercício 5

Crie um endpoint do tipo  `GET`  com a rota  `/movies/:id`, que possa listar um filme do JSON por  `id`.

## 🚀 Exercício 6

Crie um endpoint do tipo  `GET`  com a rota  `/movies`, que possa listar todos os filmes do JSON.

## 🚀 Exercício 7

Crie um endpoint do tipo  `POST`  com a rota  `/movies`, para cadastrar um novo filme no JSON.

O corpo da requisição deve receber o seguinte formato:

Copiar

```json
1{
2  "movie": "Vingadores",
3  "price": 5
4}
```

## 🚀 Exercício 8

Crie um endpoint do tipo  `PUT`  com a rota  `/movies/:id`, que possa editar informações de um filme do JSON.

O corpo da requisição deve receber o seguinte formato:

Copiar

```json
1{
2  "movie": "Vingadores: Ultimato",
3  "price": 5
4}
```

## 🚀 Exercício 9

Crie um endpoint do tipo  `DELETE`  com a rota  `/movies/:id`  que possa deletar um filme do JSON.