// =====================================================
// 📘 الدرس 08: المصفوفات (Arrays)
// =====================================================

// --- إنشاء مصفوفة ---
let myFriends = ["Ali", "Ahmed", "Sayed"];
console.log(`Hello ${myFriends[0]}`);

// تغيير عنصر
myFriends[1] = "Kareem";
console.log(myFriends);

// --- Length واستخدامها ---
console.log(myFriends.length); // 3

// إضافة عنصر ديناميكياً
myFriends[myFriends.length] = "Mageed";
console.log(myFriends);

// تعديل آخر عنصر
myFriends[myFriends.length - 1] = "Gamal";
console.log(myFriends);

console.log("--- Push, Unshift, Pop, Shift ---");

// --- إضافة وحذف عناصر ---
let myFriend = ["A", "L", "I", "Khaled"];

myFriend.unshift("Ali", "Khaled"); // إضافة في الأول
console.log(myFriend);

myFriend.push("Samah", "Eman");    // إضافة في الآخر
console.log(myFriend);

myFriend.shift();                  // حذف من الأول
console.log(myFriend);

myFriend.pop();                    // حذف من الآخر
console.log(myFriend);

console.log("--- indexOf, includes, sort ---");

// --- البحث ---
let names = ["Ali", "Khaled", "Mohamed", "Ali"];
console.log(names.indexOf("Ali"));        // 0
console.log(names.indexOf("Ali", 1));     // 3
console.log(names.includes("Ali"));       // true

// --- الترتيب ---
let sort = [10, "Sayed", "Mohammed", "90", 9000, 100, 20, "10", -20, -10];
console.log(sort.sort());
console.log(sort.reverse());

console.log("--- Slice و Splice ---");

// --- Slice (مش بيعدل الأصل) ---
let slicing = ["Ahmed", "Sayed", "Ali", "Osama", "Elzero"];
console.log(slicing.slice());        // نسخة كاملة
console.log(slicing.slice(1));       // من index 1
console.log(slicing.slice(1, 4));    // من 1 لـ 3
console.log(slicing.slice(-3));      // آخر 3 عناصر

// --- Splice (بيعدل الأصل) ---
slicing.splice(0, 0, "Asmaa", "Khaled"); // إضافة بدون حذف
console.log(slicing);

console.log("--- Concat و Join ---");

// --- Concat (دمج مصفوفات) ---
let friendsA = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal"];
let friendsB = ["Samer", "Sameh"];
let schoolFriends = ["Haythem", "Shady"];

let allFriends = friendsA.concat(friendsB, schoolFriends, "Gamal", [1, 2]);
console.log(allFriends);

// --- Join (تحويل لنص) ---
console.log(allFriends.join());        // بفاصلة
console.log(allFriends.join(" "));    // بمسافة
console.log(allFriends.join(" @ "));  // بعلامة @
console.log(allFriends.join("|"));    // بـ |
