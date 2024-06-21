const Calculator = require('../src/calculator');
const assert = require('assert');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should add two numbers correctly', () => {
    assert.strictEqual(calculator.add(1, 2), 3);
  });

  it('should subtract two numbers correctly', () => {
    assert.strictEqual(calculator.subtract(5, 2), 3);
  });

  it('should multiply two numbers correctly', () => {
    assert.strictEqual(calculator.multiply(3, 4), 12);
  });

  it('should divide two numbers correctly', () => {
    assert.strictEqual(calculator.divide(8, 2), 4);
  });

  it('should throw an error when dividing by zero', () => {
    assert.throws(() => {
      calculator.divide(8, 0);
    }, Error, "Cannot divide by zero");
  });
});
