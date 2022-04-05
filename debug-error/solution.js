function myFunction(arr, number) {
    if (!arr) throw new ReferenceError("'arr' é um parâmetro obrigatório.");
    if (!number) throw new ReferenceError("'number' é um parâmetro obrigatório.");
    if (typeof arr !== "object")
        throw new TypeError("O parâmetro 'arr' deve ser do tipo 'objeto'.");
    if (typeof number !== "number")
        throw new TypeError("O parâmetro 'number' deve ser do tipo 'number'.");
    if (arr.length !== number)
        throw new RangeError(
            "O tamanho do parâmetro 'arr' dever ser igual ao valor do parâmetro 'number'."
        );

    return arr;
}

const tests = [
    { arr: undefined, num: undefined, expected: ReferenceError },
    { arr: "a", num: undefined, expected: ReferenceError },
    { arr: "a", num: 1, expected: TypeError },
    {
        arr: ["a"],
        num: "1",
        expected: TypeError,
    },
    {
        arr: ["a"],
        num: 2,
        expected: RangeError,
    },
    {
        arr: ["a"],
        num: 1,
        expected: Array,
    },
    {
        arr: ["a", "b"],
        num: 2,
        expected: Array,
    },
];

console.log("Testando a função myFunction\n");
tests.map((test, index) => {
    console.log(`-----------------------`);
    console.log(`➡ Teste: ${index + 1}`);
    console.log("arr: ", test.arr);
    console.log("number: ", test.num);
    let result = undefined;
    try {
        result = myFunction(test.arr, test.num);
        console.log("Resultado da Função:", result);
    } catch (e) {
        result = e;
        if (e instanceof ReferenceError) {
            console.log(`ERRO: Estão faltando parâmetros:`);
        } else if (e instanceof TypeError) {
            console.log(`ERRO: Os parâmetros não são do tipo esperado:`);
        } else if (e instanceof RangeError) {
            console.log(`ERRO: Os parâmetros são inconsistentes entre si:`);
        } else {
            console.log(`ERRO: Erro não esperado:`);
        }
        console.log("Mensagem original do erro: ", e.message);
    } finally {
        if (result === test.expected || result instanceof test.expected) {
            console.log(`✔ O Teste ${index + 1} passou`);
        } else {
            console.log(`❌ O Teste ${index + 1} NÃO passou`);
            console.log("EXPECTED ERROR:", test.expected);
            console.log("RETURNED ERROR:", result.name ? result.name : result);
        }
        console.log(`\n`);
    }
});

console.log("Fim dos testes 😁\n");