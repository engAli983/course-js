// =====================================================
// 📘 الدرس 06: النصوص (Strings)
// =====================================================

// --- الجزء الأول: الأساسيات ---
let theName = "  Ali  ";
let firstName = "ascyhbjsdbzjfbk";

console.log(theName[2]);               // حرف معين بالـ index
console.log(theName.charAt(2));        // نفس الفكرة
console.log(theName.charCodeAt(2));    // كود ASCII للحرف

console.log(firstName.length);         // عدد الحروف

console.log(theName.trim());           // إزالة المسافات
console.log(theName.toUpperCase());    // حروف كبيرة
console.log(theName.toLowerCase());    // حروف صغيرة

console.log("--- Part 2 ---");

// --- الجزء التاني: البحث والقص ---
let a = "Ali Khaled Mohamed";

console.log(a.indexOf("Khaled"));      // 4
console.log(a.indexOf("Khaled", 5));   // -1 (مش موجود بعد الـ index 5)
console.log(a.lastIndexOf("a"));       // 14 (آخر مكان للحرف a)

console.log(a.slice(0));               // الجملة كلها
console.log(a.slice(4));               // "Khaled Mohamed"
console.log(a.slice(0, 3));            // "Ali"

console.log(a.repeat(2));             // "Ali Khaled MohamedAli Khaled Mohamed"
console.log(a.split(" "));            // ["Ali", "Khaled", "Mohamed"]

console.log("--- Part 3 ---");

// --- الجزء الثالث: substring و includes ---
console.log(a.substring(0, 3));        // "Ali"
console.log(a.includes("Khaled"));     // true
console.log(a.startsWith("Ali"));      // true
console.log(a.endsWith("Mohamed"));    // true
