# 📘 الدرس 21: AJAX و JSON

## 📌 إيه هو JSON؟

- **JavaScript Object Notation** - صيغة لتبادل البيانات
- بديل لـ XML
- سهل القراءة وبتستخدمه معظم لغات البرمجة

### JSON vs XML

| JSON | XML |
|------|-----|
| نص عادي | لغة Markup |
| خفيف | ثقيل |
| بدون Tags | بيستخدم Tags |
| بيدعم Arrays | مش بيدعم |

## 🔹 Parse و Stringify
```javascript
// من JSON لـ JS Object
let jsObj = JSON.parse('{"name": "Ali", "age": 19}');

// من JS Object لـ JSON
let jsonStr = JSON.stringify({ name: "Ali", age: 19 });
```

## 📌 Synchronous vs Asynchronous

```javascript
// Synchronous - كل سطر بيستنى اللي قبله
console.log("1");
console.log("2");

// Asynchronous - مش بيستنى
console.log("1");
setTimeout(() => console.log("2"), 3000);
console.log("3"); // هيظهر قبل 2
```

## 🔹 XMLHttpRequest
```javascript
let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/elzerowebschool/repos");
req.send();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    console.log(data);
  }
};
```

## 🔹 Promise
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Done!");
  else reject(Error("Failed!"));
});

myPromise
  .then((val) => console.log(val))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finished"));
```

## 🔹 Fetch API ✅
```javascript
fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

## 🔹 Async / Await ✅
```javascript
async function getData() {
  try {
    let res = await fetch("https://api.github.com/users/elzerowebschool/repos");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
```

## 🔹 Promise.all / allSettled / race
```javascript
Promise.all([p1, p2, p3])         // كلهم لازم ينجحوا
Promise.allSettled([p1, p2, p3])  // بيرجع نتيجة الكل
Promise.race([p1, p2, p3])       // أول واحد يخلص
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
