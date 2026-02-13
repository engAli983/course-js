# 📘 الدرس 11: الكائنات (Objects)

## 📌 إنشاء كائن

```javascript
let user = {
  // Properties
  theName: "Ali",
  theAge: 19,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};
```

## 🔹 الوصول للخصائص

### Dot Notation vs Bracket Notation
```javascript
console.log(user.theName);       // Dot Notation
console.log(user["theName"]);    // Bracket Notation

// لازم نستخدم Bracket لو الاسم فيه مسافة
let user = { "country of": "Egypt" };
console.log(user["country of"]);
```

## 🔹 Nested Objects
```javascript
let user = {
  name: "Ali",
  addresses: {
    egypt: {
      one: "Sharkaya",
      two: "AbuKabir",
    },
  },
};
console.log(user.addresses.egypt.two); // "AbuKabir"
```

## 🔹 طرق إنشاء الكائنات

### 1. Object Literal `{}`
### 2. `new Object()`
```javascript
let user = new Object();
user.name = "Ali";
user.age = 19;
```

### 3. `Object.create()`
```javascript
let user = { age: 19 };
let copy = Object.create(user);
copy.age = 50;
```

## 🔹 `this` Keyword
`this` بتشير للـ object اللي بينفذ الدالة:
```javascript
let user = {
  age: 19,
  doubleAge: function () {
    return this.age * 2; // 38
  },
};
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
