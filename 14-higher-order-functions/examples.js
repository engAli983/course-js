// =====================================================
// 📘 الدرس 14: الدوال العليا (Higher Order Functions)
// =====================================================

// --- map() ---
let myNums = [1, 2, 3, 4, 5];

// الطريقة العادية
let newArray = [];
for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}
console.log("Loop:", newArray);

// نفس الفكرة مع map
let addSelf = myNums.map((e) => e + e);
console.log("Map:", addSelf);

console.log("--- Map Practice ---");

// تبديل حالة الحروف
let swappingCases = "elZERo";
let sw = swappingCases
  .split("")
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join("");
console.log(sw); // ELzerO

// عكس الإشارة
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let inv = invertedNumbers.map((ele) => -ele);
console.log(inv);

// حذف الأرقام من النص
let ignoreNumbers = "Elz123er4o";
let ign = ignoreNumbers
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(ign); // Elzero

console.log("--- filter() ---");

// --- filter() ---
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
let filterFriends = friends.filter((ele) => ele.startsWith("A"));
console.log(filterFriends);

let numbers = [11, 20, 2, 5, 17, 10];
let evenNumbers = numbers.filter((ele) => ele % 2 === 0);
console.log(evenNumbers);

// كلمات أقل من 5 حروف
let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter((ele) => ele.length <= 4)
  .join(" ");
console.log(smallWords);

console.log("--- reduce() ---");

// --- reduce() ---
let nums = [10, 20, 15, 30];
let total = nums.reduce((acc, curr) => acc + curr);
console.log("Total:", total); // 75

// أطول كلمة
let theBiggest = ["Bla", "Propaganda", "Other", "Battery", "Test"];
let longest = theBiggest.reduce((acc, curr) =>
  acc.length > curr.length ? acc : curr
);
console.log("Longest:", longest);

// إزالة حرف من مصفوفة وتحويلها لنص
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
  .filter((ele) => ele !== "@")
  .reduce((acc, curr) => `${acc}${curr}`);
console.log(finalString); // ELZERO

console.log("--- Practice ---");

// --- تمارين إضافية ---
// إضافة ضريبة 15%
let prices = [100, 200, 300, 400];
let newPrice = prices.map((ele) => ele * 1.15);
console.log(newPrice);

// تكبير أول حرف
let names = ["ali", "OMAR", "mONA"];
let capitalFirst = names.map(
  (ele) => ele[0].toUpperCase() + ele.slice(1).toLowerCase()
);
console.log(capitalFirst);

// فلترة الدرجات
let grades = [10, 50, 35, 80, 100, 45];
let passing = grades.filter((ele) => ele >= 50);
console.log(passing);
