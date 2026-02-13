# 📘 الدرس 02: أنواع البيانات (Data Types)

## 📌 أنواع البيانات في JavaScript

JavaScript فيها أنواع بيانات أساسية (**Primitive**) وأنواع مرجعية (**Reference**).

## 🔹 الأنواع الأساسية

| النوع | مثال | الناتج من `typeof` |
|-------|------|---------------------|
| String | `"Ali"` | `string` |
| Number | `500`, `55.5` | `number` |
| Boolean | `true`, `false` | `boolean` |
| Undefined | `undefined` | `undefined` |
| Null | `null` | `object` ⚠️ (bug في JavaScript) |

## 🔹 الأنواع المرجعية

| النوع | مثال | الناتج من `typeof` |
|-------|------|---------------------|
| Array | `[1, 2, 3]` | `object` |
| Object | `{name: "Ali"}` | `object` |

## 🔹 أمثلة عملية

```javascript
console.log(typeof "Ali");              // string
console.log(typeof 500);               // number
console.log(typeof true);              // boolean
console.log(typeof undefined);         // undefined
console.log(typeof null);              // object ⚠️
console.log(typeof [1, 2, 3]);         // object
console.log(typeof {name: "Ali"});     // object
```

> ⚠️ **ملاحظة:** `typeof null` بترجع `object` وده bug معروف في JavaScript من أول إصدار.

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
