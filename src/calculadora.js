// Função simples para testar soma

export function somar(a, b) {
    return a + b;
}

// Função simples para testar subtração

export function subtrair(a, b) {
    return a - b;
}

// Função simples para testar multiplicação

export function multiplicar(a, b) {
    return a * b;
}

// Função simples para testar divisão

export function dividir(a, b) {
    if (b == 0) {
        throw new Error("Não é possível dividir por zero");
    }

    return a / b;
}