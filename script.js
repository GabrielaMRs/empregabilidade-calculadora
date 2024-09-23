function calcular(expressao) {
  try {
      const resultado = eval(expressao);
      console.log(`Resultado: ${resultado}`);
  } catch (error) {
      console.log('Erro: Expressão inválida');
  }
}
