// =====================================================
// 📘 الدرس 04: العمليات الحسابية (Arithmetic Operators)
// =====================================================

// --- العمليات الأساسية ---
console.log(5 + 4);       // 9 - الجمع
console.log(5 + " Ali");  // "5 Ali" - Concatenation
console.log(8 - 3);       // 5 - الطرح
console.log(8 - "Ali");   // NaN - Not A Number
console.log(typeof NaN);  // number
console.log(10 * 20);     // 200 - الضرب
console.log(10 * -20);    // -200
console.log(20 / 5);      // 4 - القسمة
console.log(20 / 3);      // 6.666...
console.log(2 ** 4);      // 16 - الأُس
console.log(11 % 2);      // 1 - باقي القسمة

console.log("--- Increment ---");

// --- Post Increment ---
let post = 1;
console.log(post++);      // 1 (يطبع الأول وبعدين يزود)
console.log(post++);      // 2

// --- Pre Increment ---
let pre = 1;
console.log(++pre);       // 2 (يزود الأول وبعدين يطبع)

console.log("--- Unary Plus ---");

// --- Unary Plus (تحويل لرقم) ---
console.log(+100);        // 100
console.log(+"100");      // 100
console.log(typeof +"100"); // number
console.log(+"-100");     // -100
console.log(+"Ali");      // NaN
console.log(+"15.5");     // 15.5
console.log(+0xff);       // 255
console.log(+null);       // 0
console.log(+false);      // 0
console.log(+true);       // 1

console.log("--- Unary Negation ---");

// --- Unary Negation (تحويل لرقم + عكس الإشارة) ---
console.log(-100);        // -100
console.log(-"100");      // -100
console.log(-"-100");     // 100
console.log(-"Ali");      // NaN
console.log(-"15.5");     // -15.5
console.log(-0xff);       // -255
console.log(-null);       // -0
console.log(-false);      // -0
console.log(-true);       // -1
