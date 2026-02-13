# 📘 الدرس 10: الحلقات التكرارية (Loops)

## 📌 أنواع الحلقات

### 1. For Loop
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 2. While Loop
```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

### 3. Do...While Loop
بيشتغل **مرة واحدة على الأقل** حتى لو الشرط `false`:
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (false); // هيطبع 0 مرة واحدة
```

## 🔹 Nested Loops
```javascript
let products = ["Keyboard", "Mouse"];
let colors = ["Red", "Green"];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
}
```

## 🔹 التحكم في الحلقات

| الأمر | الوظيفة |
|-------|---------|
| `break` | إيقاف الحلقة تماماً |
| `continue` | تخطي الدورة الحالية |
| `label:` | تسمية حلقة للتحكم فيها |

```javascript
// break - بيوقف لما يوصل لـ "Pen"
for (let i = 0; i < products.length; i++) {
  if (products[i] === "Pen") break;
  console.log(products[i]);
}

// continue - بيتخطى الأرقام
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") continue;
  console.log(arr[i]);
}
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
