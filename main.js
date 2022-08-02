(function () {
  "use strict";

  // Questão 2):
  // Podemos utilizar funções com a regra do quadrado perfeito: (5*n*n + 4) ou (5*n*n - 4)
  function isPerfectSquare(num) {
    let result = parseInt(Math.sqrt(num));
    return result * result == num;
  }

  function isFibonacci(num) {
    return isPerfectSquare(5 * num * num + 4) ||
      isPerfectSquare(5 * num * num - 4)
      ? console.log(num + " pertence à sequência Fibonacci.")
      : console.log(num + " não pertence à sequência Fibonacci.");
  }

  console.log("\nResposta da questão 2):");
  isFibonacci(0);
  isFibonacci(4);
  isFibonacci(13);
  isFibonacci(14);

  // Questão 3):
  console.log("\nResposta da questão 3):");

  const json = require("./dados.json");
  let minValue = json[0];
  let maxValue = json[0];
  let averageBilling = 0;
  let validDays = 0;
  let daysAboveAverage = 0;

  function getMinValue(json) {
    json.forEach((el) => {
      if (el.valor !== 0) {
        el.valor < minValue.valor ? (minValue = el) : "";
      }
    });
    return `O menor valor de faturamento do mês foi R$${minValue.valor.toFixed(
      2
    )} no dia ${minValue.dia}.`;
  }

  function getMaxValue(json) {
    json.forEach((el) => {
      if (el.valor !== 0) {
        el.valor > maxValue.valor ? (maxValue = el) : "";
      }
    });
    return `O maior valor de faturamento do mês foi R$${maxValue.valor.toFixed(
      2
    )} no dia ${maxValue.dia}.`;
  }

  for (let i = 0; i < json.length; i++) {
    if (json[i].valor !== 0) {
      validDays++;
      averageBilling += json[i].valor;
    }
  }
  averageBilling /= validDays;

  function getDaysAboveAverage(json) {
    json.forEach((el) => {
      el.valor > averageBilling
        ? daysAboveAverage++
        : '';
    });
    return `${daysAboveAverage} dias estiveram acima da média de faturamento mensal que atualmente é de R$${averageBilling.toFixed(2)}`;
  }

  console.log(getMinValue(json));
  console.log(getMaxValue(json));
  console.log(getDaysAboveAverage(json));

  // Questão 4):
  const SP = 67836.43;
  const RJ = 36678.66;
  const MG = 29229.88;
  const ES = 27165.48;
  const others = 19849.53;
  const monthlyBilling = SP + RJ + MG + ES + others;

  function percentual(state) {
    const percentageBilled = (state * 100) / monthlyBilling;
    return percentageBilled.toFixed(2);
  }

  console.log("\nResposta da questão 4):");
  console.log(percentual(SP));
  console.log(percentual(RJ));
  console.log(percentual(MG));
  console.log(percentual(ES));
  console.log(percentual(others));

  // Questão 5):
  function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  }

  console.log("\nResposta da questão 5):");
  console.log(reverseString("Hello, World!"));
})();
