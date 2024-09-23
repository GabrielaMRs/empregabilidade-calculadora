function calcular(expressao) {
  try {
      const resultado = eval(expressao);
      console.log(`Resultado: ${resultado}`);
  } catch (error) {
      console.log('Erro: Expressão inválida');
  }
}

let expressaoAtual = '';

function solicitarInput() {
    expressaoAtual = prompt('Digite a expressão:');
    calcular(expressaoAtual);
}

function clear() {
    expressaoAtual = '';
    console.log('Expressão limpa');
}

function iniciarCalculadora() {
  let continuar = true;
  while (continuar) {
      solicitarInput();
      continuar = confirm('Deseja calcular outra expressão?');
      clear();
  }
}

iniciarCalculadora();
