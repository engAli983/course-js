# 📘 الدرس 12: التفكيك (Destructuring)

## 📌 Array Destructuring

### الشكل البسيط
```javascript
let myFriends = ["Ali", "Kareem", "Maged", "Mahmoud"];
let [f1, f2, f3, f4] = myFriends;
console.log(f1); // "Ali"
```

### تخطي عناصر
```javascript
let numbers = [1, 2, 3, 4];
let [x, , y] = numbers;
console.log(x); // 1
console.log(y); // 3
```

### قيم افتراضية
```javascript
let fruits = ["apple"];
let [f1, f2 = "banana"] = fruits;
console.log(f2); // "banana"
```

### تبديل المتغيرات (Swap)
```javascript
let a = "Book";
let b = "Video";
[a, b] = [b, a]; // بدون متغير وسيط ✅
```

### Rest
```javascript
let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest); // [3, 4, 5]
```

## 📌 Object Destructuring

### الشكل البسيط
```javascript
const user = { theName: "Ali", theAge: 19 };
const { theName, theAge } = user;
```

### تغيير اسم المتغير
```javascript
const { theName: n, theAge: a } = user;
console.log(n); // "Ali"
```

### قيمة افتراضية
```javascript
const { theColor: co = "red" } = user;
```

### Nested Destructuring
```javascript
const user = {
  theSkills: { html: 70, css: 80 },
};
const { theSkills: { html: h, css: cs } } = user;
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
