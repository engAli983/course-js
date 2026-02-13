// =====================================================
// 📘 الدرس 13: Set, Map و Spread
// =====================================================

// --- Set ---
let myData = [1, 1, 1, 2, 3, "A"];
let myUniqueData = new Set();
myUniqueData.add(1).add(1).add(1).add(2).add(3).add("A");

console.log(myData);               // [1, 1, 1, 2, 3, "A"]
console.log(myUniqueData);         // Set {1, 2, 3, "A"}
console.log(myUniqueData.size);    // 4

// --- Set Methods ---
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(`Size: ${mySet.size}`);

// forEach
mySet.forEach((el) => console.log(el));

console.log("--- WeakSet ---");

// --- WeakSet ---
let myws = new WeakSet([{ A: 1, B: 2 }]);
console.log(myws);

console.log("--- Map ---");

// --- Map ---
let myMap = new Map([
  [10, "Number"],
  ["name", "String"],
  [false, "Boolean"],
]);

console.log(myMap.get(10));      // "Number"
console.log(myMap.get("name"));  // "String"
console.log(myMap.get(false));   // "Boolean"
console.log(myMap.size);         // 3

myMap.delete("name");
console.log(myMap.size);         // 2

console.log("--- WeakMap ---");

// --- WeakMap ---
let weakMap = new WeakMap();
let user = { name: "Sara" };
weakMap.set(user, "Admin");
console.log(weakMap.has(user));  // true
user = null; // الـ object هيتحذف من الذاكرة
console.log(weakMap.has(user));  // false

console.log("--- Array.from ---");

// --- Array.from ---
console.log(Array.from("Ali")); // ["A", "l", "i"]
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
); // [2, 4, 6, 8, 10]

console.log("--- some() ---");

// --- some() ---
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let hasGreaterThan5 = nums.some(function (e) {
  return e > 5;
});
console.log(hasGreaterThan5); // true

// --- every() ---
let allGreaterThan0 = nums.every(function (e) {
  return e > 0;
});
console.log(allGreaterThan0); // true

console.log("--- Spread Operator ---");

// --- Spread Operator ---
// مع النصوص
console.log(..."Ali");         // A l i
console.log([..."Ali"]);       // ["A", "l", "i"]

// دمج مصفوفات
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let allArrays = [...arr1, ...arr2];
console.log(allArrays);        // [1, 2, 3, 4, 5, 6]

// نسخ مصفوفة
let copiedArray = [...arr1];
console.log(copiedArray);      // [1, 2, 3]

// Push باستخدام Spread
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];
allFriends.push(...thisYearFriends);
console.log(allFriends);

// مع Math
let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums)); // 1000

// دمج Objects
let objOne = { a: 1, b: 2 };
let objTwo = { c: 3, d: 4 };
console.log({ ...objOne, ...objTwo, e: 5 });
