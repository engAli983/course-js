// =====================================================
// 📘 الدرس 09: الدوال (Functions)
// =====================================================

// --- Function Declaration ---
function sayHello(userName) {
  console.log(`Hello ${userName}`);
}
sayHello("Ali");
sayHello("Khaled");

console.log("--- Function with Condition ---");

// --- دالة مع شرط ---
function checkAge(userName, age) {
  if (age < 19) {
    console.log("App Is Not Suitable For You");
  } else {
    console.log(`Hello ${userName} Your Age Is ${age}`);
  }
}
checkAge("none", 18);
checkAge("Ali", 19);

console.log("--- Generate Years ---");

// --- دالة مع Loop ---
function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) continue;
    console.log(i);
  }
}
generateYears(2020, 2026, 2023);

console.log("--- Return ---");

// --- Return ---
function calc(num1, num2) {
  return num1 + num2;
}
let result = calc(10, 20);
console.log(result); // 30

console.log("--- Default Parameters ---");

// --- Default Parameters (ES6) ---
function greet(userName, age = "Unknown") {
  return `Hello ${userName} Your Age Is ${age}`;
}
console.log(greet("Ali"));         // age = "Unknown"
console.log(greet("Ali", 19));     // age = 19

console.log("--- Rest Parameters ---");

// --- Rest Parameters ---
function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Result ${result}`;
}
console.log(sum(10, 20, 30, 40)); // 100

console.log("--- Anonymous Function ---");

// --- Anonymous Function ---
let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20)); // 30

console.log("--- Arrow Function ---");

// --- Arrow Function (ES6) ---
let print = () => {
  return 10;
};
console.log(print()); // 10

// صيغة مختصرة
let add = (a, b) => a + b;
console.log(add(5, 3)); // 8
