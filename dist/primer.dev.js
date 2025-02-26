"use strict";

//1
function primer(K, N) {
  for (var i = 0; i < N; i++) {
    console.log(K);
  }
}

console.log("Задание 1:");
primer(5, 3); //2

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
prime(100);
//# sourceMappingURL=primer.dev.js.map
