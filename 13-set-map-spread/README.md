# 📘 الدرس 13: Set, Map و Spread

## 📌 Set
مجموعة بيانات **فريدة** (مفيش تكرار):

```javascript
let mySet = new Set([1, 1, 1, 2, 3, "A"]);
console.log(mySet);      // Set {1, 2, 3, "A"}
console.log(mySet.size); // 4
```

| الدالة | الوظيفة |
|--------|---------|
| `add()` | إضافة عنصر |
| `delete()` | حذف عنصر |
| `has()` | هل العنصر موجود؟ |
| `size` | عدد العناصر |

## 📌 WeakSet
نفس Set بس **بيقبل objects بس** والـ garbage collector بيشتغل عليه.

## 📌 Map
زي الـ Object بس الـ **key ممكن يكون أي نوع**:

```javascript
let myMap = new Map([
  [10, "Number"],
  ["name", "String"],
  [false, "Boolean"],
]);
console.log(myMap.get(10));    // "Number"
console.log(myMap.size);       // 3
```

## 📌 WeakMap
نفس Map بس الـ key لازم يكون **object** والـ garbage collector بيشتغل عليه.

## 📌 Spread Operator `...`

```javascript
// مع النصوص
console.log([..."Ali"]); // ["A", "l", "i"]

// دمج مصفوفات
let all = [...arr1, ...arr2];

// نسخ مصفوفة
let copy = [...original];

// دمج objects
console.log({ ...obj1, ...obj2 });

// مع Math
console.log(Math.max(...[10, 20, 100])); // 100
```

## 📌 Array Methods الإضافية

| الدالة | الوظيفة |
|--------|---------|
| `Array.from()` | تحويل لمصفوفة |
| `copyWithin()` | نسخ عناصر داخل المصفوفة |
| `some()` | هل فيه عنصر واحد على الأقل بيحقق الشرط؟ |
| `every()` | هل كل العناصر بتحقق الشرط؟ |

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
