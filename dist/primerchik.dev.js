"use strict";

//1
function p(K, N) {
  for (var i = 0; i < N; i++) {
    console.log(K);
  }
}

console.log("Задание 1:");
p(5, 3); //2

function pr(A, B) {
  var count = 0;

  for (var i = B - 1; i > A; i--) {
    console.log(i);
    count += 1;
  }

  console.log("Количество чисел:", count);
}

console.log("Задание 2:");
pr(2, 7); //3

function pri(A, B) {
  var product = 1;

  for (var i = A; i <= B; i++) {
    product *= i;
  }

  return product;
}

console.log("Задание 3:");
console.log("Произведение чисел от 3 до 5:", pri(3, 5)); //4

function prim(N) {
  var sum = 0;

  for (var i = 1; i <= N; i++) {
    sum += 1 / i;
  }

  return sum;
}

console.log("Задание 4:");
console.log("Сумма дробей:", prim(2)); //5

function prime(price) {
  for (var i = 1; i <= 10; i++) {
    console.log("".concat(i, " \u043A\u0433 \u043A\u043E\u043D\u0444\u0435\u0442: ").concat(price * i, " \u0440\u0443\u0431\u043B\u0435\u0439"));
  }
}

console.log("Задание 5:");
prime(100); //6

function primer(A, B) {
  var product = 1;

  for (var i = A; i <= B; i++) {
    // Проверяем перед умножением
    if (product * i > 100) {
      break;
    }

    product *= i;
  }

  return product;
}

console.log("Задание 6:");
console.log("Произведение чисел от 2 до 7:", primer(2, 7)); //7

function primerr(N) {
  var sum = 0;
  var h = 1;

  for (var i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else {
      h *= i;
    }
  }

  console.log("\u0421\u0443\u043C\u043C\u0430 \u0447\u0435\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(sum));
  console.log("\u041F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043D\u0435\u0447\u0435\u0442\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: ".concat(h));
}

console.log("Задание 7:");
var N = parseInt(prompt("Введите положительное число N:"));
primerr(N);
//# sourceMappingURL=primerchik.dev.js.map
