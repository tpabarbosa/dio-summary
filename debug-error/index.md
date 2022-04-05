# Debugging e Error Handling em Javascript

Atividade prática [https://github.com/stebsnusch/basecamp-javascript/tree/main/debug-error](https://github.com/stebsnusch/basecamp-javascript/tree/main/debug-error)

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
  - Se o array não for do tipo 'object', lance um erro do tipo TypeError
  - Se o número não for do tipo 'number', lance um erro do tipo TypeError
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
- Utilize a declaração try...catch
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

## Solução

Para resolver esta atividade, primeiramente criei uma função `myFunction` e um bloco `try...catch`, ambos conforme as especificações.

```js
function myFunction(arr, number) {
    if (/* implementação */) throw new ReferenceError("'arr' é um parâmetro obrigatório.");
    if (/* implementação */) throw new ReferenceError("'number' é um parâmetro obrigatório.");
    if (/* implementação */   )
        throw new TypeError("O parâmetro 'arr' deve ser do tipo 'objeto'.");

    // restante da implementação

    return arr;
}
```

```js
  try {
    const resultado = myFunction(['a', 'b', 'c'], 3);
    console.log("Resultado da Função:", resultado);
  }
  catch (e) {
    if (/* implementação */) {
        console.log("ERRO: Estão faltando parâmetros");
        // outras mensagens que achar importante, p ex e.message
    } else if (/* implementação */) {
        console.log("ERRO: Os parâmetros não são do tipo esperado");
        // outras mensagens que achar importante
    }
    // restante da implementação
    } else {
        console.log("Erro desconhecido");
    }
  }
```

Para testarmos outros valores e também os casos de erro, uma opção é alterarmos manualmente os parâmetros de chamada da função `myFunction`, como na linha a seguir, e daí executarmos o código novamente.

```js
const resultado = myFunction(["a", "b", "c"]);
// neste caso esperamos um erro pois falta o segundo parâmetro
```

Porém esta abordagem não é muito prática, pois 'perdemos' o que havia sido feito anteriormente, e caso tenhamos que alterar alguma implementação de `myFunction`, teríamos que novamente, e de forma manual, alterar os parâmetros até testarmos todos os casos.

Outra possibilidade é, ao invés de alterarmos os valores dos parâmetros manualmente, criarmos uma `array de testes` que pudêssemos iterar por cada item, verificando o comportamento da função para cada um dos casos que nos interessa testar. No exemplo abaixo cada teste é um `objeto` que contém 3 informações:

- `arr` é o valor que será passado para a função como primeiro parâmetro;
- `num` é o valor que será passado para a função como segundo parâmetro;
- `expected`: é o tipo que eu espero que a função retorne quando `arr` e `num` forem passados a ela.

```js
const tests = [
  {
    arr: undefined,
    num: undefined,
    expected: ReferenceError,
  },
  {
    arr: "a",
    num: undefined,
    expected: ReferenceError,
  },
  {
    arr: "a",
    num: 1,
    expected: TypeError,
  },
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
```

Para rodar os testes, podemos colocar o nosso bloco `try...catch` para ser executado **dentro da função map do array de testes**. Observe que adicionei o `finally` ao bloco `try...catch`.

```js
tests.map((test, index) => {
  console.log(`➡ TESTE ${index + 1}`);
  console.log("arr: ", test.arr);
  console.log("number: ", test.num);
  let result = undefined; // essa variável será usada para compararmos com o tipo de resultado que esperamos
  try {
    result = myFunction(test.arr, test.num); // aqui utilizamos os valores do teste
    console.log("Resultado da Função:", result); // Se não der erro, mostra o retorno da função
  } catch (e) {
    result = e;
    // implementação dos casos de erro, como já estavam escritos
  } finally {
    if (result === test.expected || result instanceof test.expected) {
      console.log(`✔ O Teste ${index + 1} passou`);
    } else {
      console.log(`❌ O Teste ${index + 1} NÃO passou`);
      console.log("EXPECTED ERROR:", test.expected);
      console.log("RETURNED ERROR:", result.name ? result.name : result : err);
    }
    console.log(`\n`);
  }
});
```

Agora teremos a certeza de que nossa função atende a todos os requisitos.

Você pode rodar o código completo que está no arquivo `solution.js` direto no console do navegador, ou então caso você tenha o NodeJs instalado em sua máquina pode executar o arquivo utilizando o comando a seguir:

```bash
 node solution.js
```
