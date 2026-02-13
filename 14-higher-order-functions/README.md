# 📘 الدرس 14: الدوال العليا (Higher Order Functions)

## 📌 إيه هي الدوال العليا؟

هي دوال بتاخد **دالة تانية كـ argument** أو بترجع دالة.

## 🔹 `map()`
بتعمل **دالة على كل عنصر** في المصفوفة وبترجع مصفوفة جديدة:

```javascript
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map((e) => e + e);
console.log(doubled); // [2, 4, 6, 8, 10]
```

### تطبيق: تبديل حالة الحروف
```javascript
let str = "elZERo";
let swapped = str.split("").map((char) =>
  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
).join(""); // "ELzerO"
```

## 🔹 `filter()`
بتفلتر العناصر حسب **شرط معين**:

```javascript
let friends = ["Ahmed", "Sameh", "Asmaa", "Amgad"];
let startsWithA = friends.filter((e) => e.startsWith("A"));
// ["Ahmed", "Asmaa", "Amgad"]

let numbers = [11, 20, 2, 5, 17, 10];
let even = numbers.filter((e) => e % 2 === 0);
// [20, 2, 10]
```

## 🔹 `reduce()`
بتحول المصفوفة لـ **قيمة واحدة**:

```javascript
let nums = [10, 20, 15, 30];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum); // 75
```

### تطبيق: أطول كلمة
```javascript
let words = ["Bla", "Propaganda", "Other", "Test"];
let longest = words.reduce((acc, curr) =>
  acc.length > curr.length ? acc : curr
); // "Propaganda"
```

## 🔹 `forEach()`
نفس `map` بس **مش بترجع مصفوفة جديدة**.

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
