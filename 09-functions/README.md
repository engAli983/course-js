# 📘 الدرس 09: الدوال (Functions)

## 📌 أنواع الدوال

### 1. Function Declaration
```javascript
function sayHello(userName) {
  console.log(`Hello ${userName}`);
}
sayHello("Ali");
```

### 2. Function Expression (Anonymous)
```javascript
let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20)); // 30
```

### 3. Arrow Function (ES6) ✅
```javascript
let print = () => 10;
let add = (a, b) => a + b;
```

## 🔹 مفاهيم مهمة

### Return
```javascript
function calc(num1, num2) {
  return num1 + num2; // بترجع القيمة
}
let result = calc(10, 20); // 30
```

### Default Parameters (ES6)
```javascript
function sayHello(userName, age = "Unknown") {
  return `Hello ${userName} Your Age Is ${age}`;
}
console.log(sayHello("Ali")); // age هتبقى "Unknown"
```

### Rest Parameters
```javascript
function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(calc(10, 20, 30, 40)); // 100
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
