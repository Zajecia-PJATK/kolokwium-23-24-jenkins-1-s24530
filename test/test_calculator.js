// test/calculator.test.js
const { expect } = require('chai');
const calculator = require('../calculator');

describe('Calculator', () => {
    it('should add two numbers', () => {
        expect(calculator.add(2, 3)).to.equal(5);
    });

    it('should subtract two numbers', () => {
        expect(calculator.subtract(5, 3)).to.equal(2);
    });

    it('should multiply two numbers', () => {
        expect(calculator.multiply(2, 3)).to.equal(6);
    });

    it('should divide two numbers', () => {
        expect(calculator.divide(6, 3)).to.equal(2);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).to.throw('Division by zero');
    });
});
