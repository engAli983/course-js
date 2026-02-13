// =====================================================
// 📘 الدرس 18: التاريخ والوقت (Date & Time)
// =====================================================

// --- التاريخ الحالي ---
let dateNow = new Date();
console.log(dateNow);

// --- حساب الوقت من 1970 ---
console.log(Date.now()); // بالمللي ثانية

let seconds = Math.floor(Date.now() / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let years = Math.floor(days / 365);

console.log(`Seconds: ${seconds}`);
console.log(`Minutes: ${minutes}`);
console.log(`Hours: ${hours}`);
console.log(`Days: ${days}`);
console.log(`Years: ${years}`);

console.log("--- Get Methods ---");

// --- Get Methods ---
let now = new Date();
console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);    // يبدأ من 0
console.log(`Date: ${now.getDate()}`);
console.log(`Day: ${now.getDay()}`);        // 0 = أحد
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

// --- حساب فرق بين تاريخين ---
let birthday = new Date("June 6, 2006");
let diff = now - birthday;
console.log(`Age: ${Math.floor(diff / 1000 / 60 / 60 / 24 / 365)} years`);

console.log("--- Set Methods ---");

// --- Set Methods ---
let myDate = new Date();
myDate.setFullYear(2024, 11); // ديسمبر 2024
console.log(myDate);

myDate.setDate(25);
console.log(myDate);

console.log("--- Formatting ---");

// --- تنسيق التاريخ ---
console.log(new Date("6-6-2006"));
console.log(new Date("2006 6 6"));
console.log(new Date(2006, 5, 6, 6, 10, 0)); // شهر 5 = يونيو

// --- Date.parse ---
console.log(Date.parse("jun 6 2006")); // Timestamp

console.log("--- Tracking Duration ---");

// --- قياس وقت العملية ---
let start = new Date();

for (let i = 0; i < 100000; i++) {
  // عملية ما
}

let end = new Date();
let duration = end - start;
console.log(`Duration: ${duration}ms`);
