# 📘 الدرس 06: النصوص (Strings)

## 📌 String Methods

### الجزء الأول

| الدالة | الوظيفة |
|--------|---------|
| `[index]` / `charAt()` | الوصول لحرف معين |
| `length` | عدد الحروف |
| `trim()` | إزالة المسافات من الأول والآخر |
| `toUpperCase()` | تحويل لحروف كبيرة |
| `toLowerCase()` | تحويل لحروف صغيرة |

```javascript
let name = "  Ali  ";
console.log(name.trim());         // "Ali"
console.log(name.toUpperCase());  // "  ALI  "
console.log(name.toLowerCase());  // "  ali  "
```

### الجزء التاني

| الدالة | الوظيفة |
|--------|---------|
| `indexOf()` | أول مكان للقيمة |
| `lastIndexOf()` | آخر مكان للقيمة |
| `slice(start, end)` | قص جزء من النص |
| `repeat(n)` | تكرار النص |
| `split(sep)` | تقسيم النص لمصفوفة |

```javascript
let a = "Ali Khaled Mohamed";
console.log(a.indexOf("Khaled"));     // 4
console.log(a.slice(4));              // "Khaled Mohamed"
console.log(a.split(" "));           // ["Ali", "Khaled", "Mohamed"]
```

### الجزء الثالث

| الدالة | الوظيفة |
|--------|---------|
| `substring(start, end)` | قص جزء (لو start > end بيبدلهم) |
| `includes(value)` | هل النص موجود؟ `true/false` |
| `startsWith(value)` | هل بيبدأ بـ؟ |
| `endsWith(value)` | هل بينتهي بـ؟ |

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
