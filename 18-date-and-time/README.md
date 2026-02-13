# 📘 الدرس 18: التاريخ والوقت (Date & Time)

## 📌 إنشاء كائن التاريخ

```javascript
let dateNow = new Date();       // الوقت الحالي
let birthday = new Date("June 6, 2006");
```

### حساب الوقت من 1 يناير 1970
```javascript
let seconds = Date.now() / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let years = days / 365;
```

## 🔹 Get Methods

| الدالة | الوظيفة |
|--------|---------|
| `getFullYear()` | السنة |
| `getMonth()` | الشهر (يبدأ من 0) |
| `getDate()` | اليوم في الشهر |
| `getDay()` | اليوم في الأسبوع (0 = أحد) |
| `getHours()` | الساعة |
| `getMinutes()` | الدقيقة |
| `getSeconds()` | الثانية |

## 🔹 Set Methods

```javascript
dateNow.setFullYear(2024);
dateNow.setMonth(11);       // ديسمبر
dateNow.setDate(25);
```

## 🔹 تنسيق التاريخ

```javascript
new Date("6-6-2006")
new Date("2006 6 6")
new Date(2006, 5, 6, 6, 10, 0)  // شهر 5 = يونيو
```

## 🔹 قياس وقت العملية
```javascript
let start = new Date();
// ... العملية ...
let end = new Date();
let duration = end - start; // بالمللي ثانية
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
