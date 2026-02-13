# 📘 الدرس 16: BOM (Browser Object Model)

## 📌 إيه هو الـ BOM؟

هو مجموعة الكائنات اللي بتتحكم في **المتصفح نفسه** (مش المحتوى).

## 🔹 Alert, Confirm, Prompt

```javascript
alert("Hello!");            // رسالة تنبيه

let result = confirm("Are You Sure?"); // تأكيد (true/false)

let name = prompt("Your name?", "Default Value"); // إدخال
```

## 🔹 setTimeout و clearTimeout

```javascript
// تنفيذ بعد 3 ثواني
let timer = setTimeout(function () {
  console.log("Hello!");
}, 3000);

// إلغاء التايمر
clearTimeout(timer);
```

## 🔹 setInterval و clearInterval

```javascript
// تنفيذ كل ثانية
let counter = setInterval(function () {
  console.log("Tick");
}, 1000);

// إيقاف
clearInterval(counter);
```

## 🔹 Location Object

```javascript
location.href                       // الرابط الحالي
location.href = "https://google.com" // التوجيه لرابط
location.reload()                    // إعادة تحميل
location.replace("url")              // استبدال (مفيش رجوع)
```

## 🔹 Local Storage

| الدالة | الوظيفة |
|--------|---------|
| `setItem(key, value)` | حفظ |
| `getItem(key)` | قراءة |
| `removeItem(key)` | حذف |
| `clear()` | مسح الكل |

```javascript
localStorage.setItem("color", "#f00");
console.log(localStorage.getItem("color"));
localStorage.removeItem("color");
localStorage.clear();
```

## 🔹 Session Storage
نفس Local Storage بالظبط بس **البيانات بتتمسح لما تقفل التاب**.

## 🔹 Scroll Methods
```javascript
window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll لفوق
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
