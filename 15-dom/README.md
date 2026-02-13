# 📘 الدرس 15: DOM (Document Object Model)

## 📌 إيه هو الـ DOM؟

هو الطريقة اللي JavaScript بتتعامل بيها مع **عناصر صفحة HTML**.

## 🔹 اختيار العناصر

| الدالة | الوظيفة |
|--------|---------|
| `getElementById()` | بالـ ID |
| `getElementsByTagName()` | بنوع العنصر |
| `getElementsByClassName()` | بالـ Class |
| `querySelector()` | أول عنصر مطابق (CSS Selector) |
| `querySelectorAll()` | كل العناصر المطابقة |

```javascript
let el = document.getElementById("my-div");
let spans = document.querySelectorAll(".my-span");
```

## 🔹 المحتوى والخصائص

```javascript
element.innerHTML     // المحتوى مع HTML tags
element.textContent   // النص بس

// تعديل attributes
element.setAttribute("data-src", "value");
element.getAttribute("data-src");
element.removeAttribute("data-src");
```

## 🔹 إنشاء وإضافة عناصر

```javascript
let div = document.createElement("div");
let text = document.createTextNode("Hello");
div.appendChild(text);
document.body.appendChild(div);
```

## 🔹 الأحداث (Events)

```javascript
btn.onclick = function () { ... };
btn.onmouseenter = function () { ... };
element.addEventListener("click", callback);
```

## 🔹 preventDefault
لمنع السلوك الافتراضي:
```javascript
form.onsubmit = function (e) {
  e.preventDefault(); // منع إرسال الفورم
};
```

## 🔹 classList
```javascript
element.classList.add("new-class");
element.classList.remove("old-class");
element.classList.toggle("active");
element.classList.contains("show");
```

## 🔹 CSS من JavaScript
```javascript
element.style.color = "red";
element.style.cssText = "color: red; font-size: 20px;";
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
