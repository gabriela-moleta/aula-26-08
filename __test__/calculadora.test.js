import { somar } from '../src/calculadora.js';

describe("Calculadora", () => {
    test("Deve somar dois números", () => {
        //AAA
        //Arrange 
        const a = 2;
        const b = 3;

        //Act
        const result = somar(a, b);

        //Assert
        expect(result).toBe(5);
    });
    });