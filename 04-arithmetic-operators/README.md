# 📘 الدرس 04: العمليات الحسابية (Arithmetic Operators)

## 📌 العمليات الحسابية الأساسية

| العملية | الرمز | مثال | النتيجة |
|---------|-------|------|---------|
| الجمع | `+` | `5 + 4` | `9` |
| الطرح | `-` | `8 - 3` | `5` |
| الضرب | `*` | `10 * 20` | `200` |
| القسمة | `/` | `20 / 5` | `4` |
| الأُس | `**` | `2 ** 4` | `16` |
| باقي القسمة | `%` | `11 % 2` | `1` |

## 🔹 Increment و Decrement

### Post Increment (`x++`)
بيطبع الرقم **الأول** وبعدين يزود:
```javascript
let post = 1;
console.log(post++);  // 1 (طبع وبعدين زود)
console.log(post);    // 2
```

### Pre Increment (`++x`)
بيزود **الأول** وبعدين يطبع:
```javascript
let pre = 1;
console.log(++pre);   // 2 (زود وبعدين طبع)
```

## 🔹 Unary Plus و Negation

**Unary Plus (`+`)** بيحول القيمة لرقم:
```javascript
console.log(+"100");    // 100 (number)
console.log(+true);    // 1
console.log(+false);   // 0
console.log(+null);    // 0
console.log(+"Ali");   // NaN
```

**Unary Negation (`-`)** بيحول لرقم ويعكس الإشارة:
```javascript
console.log(-"100");   // -100
console.log(-true);    // -1
```

> ⚠️ `NaN` (Not A Number) نوعها `number`!
> ```javascript
> console.log(typeof NaN); // "number"
> ```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
