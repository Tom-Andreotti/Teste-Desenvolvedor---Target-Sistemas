function fibonacci(numero) {
    let a = 0, b = 1, next;
    while (b < numero) {
        next = a + b;
        a = b;
        b = next;
    }
    return b === numero || numero === 0;
}

let numero = parseInt(prompt("Informe um número:"));

if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
