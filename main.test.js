const { soma, sub, freteGratis, tempoEmHora } = require('./main');

describe('Funções matemáticas', () => {
  it('Soma 2 números', () => {
    expect(soma(1, 2)).toBe(3);
  });
  it('Subtrai 2 números', () => {
    expect(sub(2, 1)).toBe(1);
  });
});

describe('Funções gerais', () => {
  it('Frete grátis para compras acima de 200 reais', () => {
    expect(freteGratis(300)).toBeTruthy();
  });
  it('Frete não é grátis para compras abaixo de 200 reais', () => {
    expect(freteGratis(150)).toBeFalsy();
  });
  it('Retorna o timestamp de uma hora no futuro', () => {
    const realDateNow = Date.now.bind(global.Date);
    global.Date.now = jest.fn(() => 0);
    expect(tempoEmHora()).toBe(3600000);
    global.Date.now = realDateNow;
  });
});
