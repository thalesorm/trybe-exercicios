const readline = require('readline-sync');

const name = readline.question('Qual o seu nome? ');
const age = readline.question('Qual a sua idade? ');
console.log(`Olá ${name}, você tem ${age} anos. Bem vindo ao desenvolvimento com Node` );