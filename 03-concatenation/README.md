# 📘 الدرس 03: دمج النصوص (Concatenation)

## 📌 إيه هو الـ Concatenation؟

هو عملية **ربط البيانات** ببعض وممكن نعملها بأكتر من طريقة.

## 🔹 الطرق

### 1. الربط بعلامة `+`
```javascript
let a = "I Love";
let b = "JavaScript";
console.log(a + " " + b); // "I Love JavaScript"
```

### 2. Template Literals (الطريقة الحديثة) ✅
```javascript
let a = "I Love";
let b = "JavaScript";
console.log(`${a} ${b}`); // "I Love JavaScript"
```

## 🔹 الفرق بين الطريقتين

```javascript
// الطريقة القديمة - صعبة في القراءة
console.log(a + " " + b + "\n" + c + " " + d);

// الطريقة الحديثة - أسهل وأنظف ✅
console.log(`${a} ${b}
${c} ${d}`);
```

> 💡 **نصيحة:** دايماً استخدم Template Literals `${}` لأنها أسهل وأنظف.

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
