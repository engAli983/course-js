# 📘 الدرس 19: المولدات (Generators)

## 📌 إيه هي Generator Function؟

دالة خاصة بتقدر **توقف التنفيذ** وتكمل بعدين باستخدام `yield`.

```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generateNumbers();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

## 🔹 استخدام `for...of`
```javascript
for (let value of generateNumbers()) {
  console.log(value); // 1, 2, 3
}
```

## 🔹 Delegate Generator
دالة generator بتستدعي generator تانية:

```javascript
function* generateNums() { yield 1; yield 2; }
function* generateLetters() { yield "A"; yield "B"; }

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6]; // ممكن كمان مصفوفة
}
```

## 🔹 أرقام لا نهائية
```javascript
function* infiniteNumbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
```

## 🔹 `return()` في Generator
```javascript
let gen = generateAll();
gen.next();
gen.return("Z"); // { value: "Z", done: true }
// بعدها كل next هترجع { value: undefined, done: true }
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
