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

    return `O array tem ${number} ${number === 1 ? "elemento" : "elementos"}.`;
}

const tests = [
    { arr: undefined, num: undefined, expectedErr: ReferenceError },
    { arr: "a", num: undefined, expectedErr: ReferenceError },
    { arr: "a", num: 1, expectedErr: TypeError },
    {
        arr: ["a"],
        num: "1",
        expectedErr: RangeError,
    },
    {
        arr: ["a"],
        num: 2,
        expectedErr: RangeError,
    },
    {
        arr: ["a"],
        num: 1,
        expectedErr: undefined,
    },
    {
        arr: ["a", "b"],
        num: 2,
        expectedErr: undefined,
    },
];

console.log("Testando a função myFunction\n");
tests.map((test, index) => {
    console.log(`-----------------------`);
    console.log(`➡ Teste: ${index + 1}`);
    console.log("arr: ", test.arr);
    console.log("number: ", test.num);
    let err = undefined;
    try {
        const result = myFunction(test.arr, test.num);
        console.log("Resultado da Função:", result);
    } catch (e) {
        err = e;
        if (e instanceof ReferenceError) {
            console.log(`ERRO: Estão faltando parâmetros:`);
        } else if (e instanceof TypeError) {
            console.log(`ERRO: Os parâmetros não são do tipo esperado:`);
        } else if (e instanceof RangeError) {
            console.log(`ERRO: Os parâmetros são inconsistentes entre si:`);
        } else {
            console.log(`ERRO: Erro não esperado:`);
        }
        console.log("Mensagem original do erro: ", err.message);
    } finally {
        if (err === test.expectedErr || err instanceof test.expectedErr) {
            console.log(`✔ O Teste ${index + 1} passou`);
        } else {
            console.log(`❌ O Teste ${index + 1} NÃO passou`);
            console.log("EXPECTED ERROR:", test.expectedErr);
            console.log("RETURNED ERROR:", err ? err.name : err);
        }
        console.log(`\n\n`);
    }
});

console.log("Fim dos testes 😁");