const { expect } = require('chai');

const calculaSituacao = require('../../calculadora');

describe('testando a nota calculada', () => {
  it('retorna se foi aprovado ou não', async function () {
    const calc = await calculaSituacao('oi');
    console.log('rwwr', calc);
    if(calc >= 0 || calc < 7){
      expect(calc).to.be.equals('reprovação');
    } else if (calc >= 7 || calc <= 10 ) {
      console.log("aluno aprovado");
      expect(calc).to.be.equals("aprovação");
    }
  })
});





