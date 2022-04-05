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

```bash
 node solution.js
```
