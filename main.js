const soma = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const freteGratis = (valor) => {
  return valor > 200;
};

const tempoEmHora = () => {
  const agora = Date.now();
  const umaHoraEmMIli = 1 * 60 * 60 * 1000;
  return agora + umaHoraEmMIli;
};

module.exports = { soma, sub, freteGratis, tempoEmHora };
