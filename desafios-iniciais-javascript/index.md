# Soluções dos Desafios Iniciais Javascript

## Desafio 1

### Instruções

Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma entre elas e chame essa variável de SOMA.
A seguir escreva o valor desta variável.

**Entrada**
O arquivo de entrada contém 2 valores inteiros.

**Saída**
Imprima a variável SOMA com todas as letras maiúsculas, inserindo um espaço em branco antes e depois do símbolo de igualdade, seguido pelo valor correspondente à soma de A e B.

| Exemplos de Entrada | Exemplos de Saída |
| ------------------- | ----------------- |
| 30 <br> 10          | SOMA = 40         |
| -30 <br> 10         | SOMA = -20        |
| 0 <br> 0            | SOMA = 0          |

### Solução

```js
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let A = parseInt(gets());
let B = parseInt(gets());

//Complete os espaços em branco com uma possível solução para o problema
let soma = A + B;
print(`SOMA = ${soma}`);
```

## Desafio 2

### Instruções

Você terá o desafio de escrever um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível, mostre a mensagem “divisao impossivel” para os valores em questão.

**Entrada**
A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

**Saída**
Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.

| Exemplo de Entrada             | Exemplo de Saída                      |
| ------------------------------ | ------------------------------------- |
| 3 <br> 3 -2 <br> -8 0 <br> 0 8 | -1.5 <br> divisao impossivel <br> 0.0 |

### Solução

```js
let limit = parseInt(gets());
for (let i = 0; i < limit; i++) {
  let line = gets().split(" ");
  let X = parseInt(line[0]);
  let Y = parseInt(line[1]);
  if (Y == 0) {
    console.log("divisao impossivel");
  } else {
    let divisao = parseFloat(X / Y).toFixed(1); //complete com o sinal da operação faltante entre x e y
    console.log(divisao);
  }
}
```

## Desafio 3

### Instruções

O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

1. Conter 39 traços horizontais ( - ) na primeira linha;
2. Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
3. Repita o procedimento 2 quatro vezes;
   Repita o procedimento 1.
4. No final deve ficar igual a imagem a seguir:

```
--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)
```

**Entrada**
Não há.

**Saída**
A saída será impresso conforme a figura acima.

### Solução

```js
//Complete o código com uma possível solução para o problema.
let line = "---------------------------------------";

let spaces = " ".repeat(37);
let lineWithSpaces = `|${spaces}|`;

print(line);

let count = 5;
for (let i = 1; i <= count; i++) {
  print(lineWithSpaces);
}

print(line);
```

## Desafio 4

### Instruções

Em 2015 um novo record foi alcançado na competição de Coxinhas de Bueno de Andrada, onde Mônica mandou pra dentro 43 coxinhas em apenas 10 minutos, passando se antecessor que conseguiu comer, no mesmo tempo, 38 coxinhas em 2014.

O restaurante especializado em coxinhas do pequeno distrito de Bueno de Andrada, interior de São Paulo, organiza essa competição todos os anos, mas nunca conseguiram entrar para o livro dos recordes, o Guinness Book. Para isso, o restaurante precisa preencher informações sobre a competição, como o número de coxinhas consumidas pelos competidores durante o evento.

Porém, como jó foi informado, a especialidade deles é coxinha, não matemática, então será que você pode ajudá-los? Com base no número total de coxinhas consumidas e o número de participantes na competição, o dono do restaurante precisa que você desenvolva um programa para saber a quantidade média de coxinha que os participantes da competição conseguem devorar.

Ah, lembre que, em troca da sua ajuda, você poderá comer quantas coxinhas conseguir.

**Entrada**
A entrada consiste de uma única linha que contém dois inteiros H e P (1 ≤ H, P ≤ 1000) indicando respectivamente o número total de coxinhas consumidas e o número total de participantes na competição.

**Saída**
Seu programa deve produzir uma única linha com um número racional representando o número médio de coxinhas consumidas pelos participantes. O resultado deve ser escrito como um número racional com exatamente dois dígitos após o ponto decimal, arredondado se necessário.

| Exemplos de Entrada | Exemplos de Saída |
| ------------------- | ----------------- |
| 10 90               | 0.11              |
| 840 11              | 76.36             |
| 1 50                | 0.02              |

### Solução

```js
//Complete o código com uma solução possível
let line = gets().split(" ");
let H = line[0];
let P = line[1];

let media = parseFloat(H / P).toFixed(2);
print(media);
```
