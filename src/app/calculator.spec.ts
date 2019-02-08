import { Calculator } from './calculator';

describe('Calculator', () => {
  it('can add', () => {
    const calculator = new Calculator();
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
  });
});
