import { somar, subtrair } from '../src/calculadora.js';

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
   

    test("Deve subtrair dois números", () => {
        //AAA
        //Arrange 
        const a = 13;
        const b = 3;

        //Act
        const result = subtrair(a, b);

        //Assert
        expect(result).toBe(100);
    });

    test("Deve multiplicar dois números", () => {
        //AAA
        //Arrange 
        const a = 10;
        const b = 4;

        //Act
        const result = multiplicar(a, b);

        //Assert
        expect(result).toBe(100);
    });
   

    test("Deve dividir dois números", () => {
        //AAA
        //Arrange 
        const a = 10;
        const b = 4;

        //Act
        const result = dividir(a, b);

        //Assert
        expect(result).toBe(100);
    });


    test("Deve lançar erro quando dividir por zero", () => {
       expect(() => {
           dividir(10, 0);
       }).toThrowError("Não é possível dividir por zero");
    });
 });