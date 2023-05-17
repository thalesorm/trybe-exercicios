// Exercicios 6A
// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

// const fs = require('fs').promises;

// async function lerSimpsons() {
//     const arquivoSimpsons = await fs.readFile('./simpsons.json', 'utf-8');
//     const arraySimpsons = JSON.parse(arquivoSimpsons)
//     const strings = arraySimpsons.map(({ id, name}) => `${id} - ${name}`)
//     strings.forEach((string) => console.log(string));
// } 

// async function main() {
//   await lerSimpsons();
// }

// main();
//_________________________________________________________________________________________________________________________________________

// 6-B Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// const fs = require("fs").promises;

// async function getSimpsonById(id) {
//   const fileContent = await fs.readFile("./simpsons.json", "utf-8");

//   const simpsons = JSON.parse(fileContent);

//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

//   if (!chosenSimpson) {
//     throw new Error("id não encontrado");
//   }
//      return chosenSimpson;
// }

// async function main() {
//   const simpson = await getSimpsonById(1);
//   console.log(simpson);
// }

// main()

//_________________________________________________________________________________________________________________________________________

// 6 - C

// const fs = require('fs').promises;

// async function alterarSimpsons() {
//   const lerArquivo = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(lerArquivo);
//   const novoArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
//   await fs.writeFile('./simpsons.json', JSON.stringify(novoArray));
// }
// function main() {
//   alterarSimpsons();
// }

// main();

//_________________________________________________________________________________________________________________________________________

// 6- D

// const fs = require('fs').promises;

// async function lerSimpsons() {
//   const simpsonsJson = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsonsObj = JSON.parse(simpsonsJson);
//   const familiaSimpsons = [1, 2, 3, 4];
//   const arquivoFamilia = simpsonsObj.filter((simpson) => familiaSimpsons.includes(Number(simpson.id)));
//   await fs.writeFile('./simpsonFamily.json', JSON.stringify(arquivoFamilia));
// }

// async function main() {
//   await lerSimpsons();
// }

// main();

//_________________________________________________________________________________________________________________________________________

// 6- E

// const fs = require('fs').promises;

// async function addNelsonToFamily() {
//   const fileContent = await fs
//     .readFile('./simpsonsFamily.json', 'utf-8');

//   const simpsonsFamily = JSON.parse(fileContent);

//   simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

//      await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
// }

// function main() {
//   addNelsonToFamily();
// }

// main();

//_________________________________________________________________________________________________________________________________________

// 6- F

const fs = require("fs").promises;

async function replaceNelson() {
  const fileContent = await fs.readFile("./simpsonsFamily.json", "utf-8");
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter(
    (simpson) => simpson.id !== "8"
    );

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson.concat([
    { id: "15", name: "Maggie Simpson" },
  ]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile(
    "./simpsonsFamily.json",
    JSON.stringify(simpsonsWithMaggie)
  );
}

// ...
function main() {
  replaceNelson(); 
}

main();

