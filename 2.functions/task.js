// Задача 1

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
  sum += arr[i];
}
  const avg = Number((sum / arr.length).toFixed(2));
return { min: min, max: max, avg: avg };
}

// Задача 2

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0 ) {
    return 0;
  }
  let maxWorker = Math.max(...arr);
  let minWorker = Math.min(...arr);

  return maxWorker - minWorker;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0 ) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
  sumEvenElement += arr[i];
  } else {
  sumOddElement += arr[i];
  }
}
return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
if (arr.length === 0 ) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
  sumEvenElement += arr[i];
  countEvenElement += 1;
  }
}
if (countEvenElement === 0) {
  return 0;
}
return sumEvenElement / countEvenElement;
}

// Задача 3

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let arr of arrOfArr) {
    const a = func(...arr)
    if (a > maxWorkerResult) {
      maxWorkerResult = a;
    }
  }
 return maxWorkerResult;
}
