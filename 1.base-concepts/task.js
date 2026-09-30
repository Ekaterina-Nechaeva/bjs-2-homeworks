"use strict";
// Задача 1

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) ) / (2 * a));
    arr.push((-b - Math.sqrt(d) ) / (2 * a));
  }
  return arr;
}

// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let monthlyInterestRate = percent / 12 / 100;
  let loanPrincipal = amount - contribution;
  let monthlyFee = loanPrincipal * (monthlyInterestRate + (monthlyInterestRate /
      (((1 + monthlyInterestRate) ** countMonths - 1))));
  let loanAmount = Number((monthlyFee * countMonths).toFixed(2));

  return loanAmount;
}