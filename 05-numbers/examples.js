// =====================================================
// 📘 الدرس 05: الأرقام (Numbers)
// =====================================================

// --- خصائص الأرقام ---
console.log(1000000);               // طريقة عادية
console.log(1_000_000);            // Syntactic Sugar - نفس القيمة
console.log(1e6);                   // 1 * 10^6 = 1000000
console.log(10000.0);              // 10000 (الأصفار بعد النقطة مش بتظهر)
console.log(Number.MAX_SAFE_INTEGER); // أكبر رقم آمن
console.log(Number.MIN_SAFE_INTEGER); // أصغر رقم آمن
console.log(Number.MAX_VALUE);       // أكبر قيمة
console.log(Number.MIN_VALUE);       // أصغر قيمة

console.log("--- Number Methods ---");

// --- toString() ---
console.log((100).toString());        // "100" - تحويل لنص

// --- toFixed() ---
console.log((100.555555).toFixed(2)); // "100.56" - رقمين بعد النقطة

// --- parseInt() ---
console.log(Number("100 Ali"));       // NaN
console.log(+"100");                  // 100
console.log(parseInt("100 Ali"));     // 100 - بيستخرج الرقم من النص

// --- parseFloat() ---
console.log(parseFloat("100.55"));    // 100.55 - بيرجع الكسور كمان

// --- isInteger() ---
console.log(Number.isInteger(100));   // true
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.55)); // false
