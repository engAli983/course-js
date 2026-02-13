// =====================================================
// 📘 الدرس 12: التفكيك (Destructuring)
// =====================================================

// --- Array Destructuring: الشكل البسيط ---
let myFriends = ["Ali", "Kareem", "Maged", "Mahmoud"];
let [myFriend1, myFriend2, myFriend3, myFriend4] = myFriends;
console.log(myFriend1); // Ali
console.log(myFriend2); // Kareem

console.log("--- Skip Elements ---");

// --- تخطي عناصر ---
let numbers = [1, 2, 3, 4];
let [x, , y] = numbers;
console.log(x); // 1
console.log(y); // 3

console.log("--- Default Values ---");

// --- قيم افتراضية ---
let fruits = ["apple"];
let [f1, f2 = "banana"] = fruits;
console.log(f1); // apple
console.log(f2); // banana

console.log("--- Swap Variables ---");

// --- Swap ---
let book = "Video";
let video = "Book";
[book, video] = [video, book];
console.log(book);  // Book
console.log(video); // Video

console.log("--- Rest ---");

// --- Rest ---
let n = [1, 2, 3, 4, 5];
let [a, b, c, ...rest] = n;
console.log(a);    // 1
console.log(b);    // 2
console.log(rest); // [4, 5]

console.log("=== Object Destructuring ===");

// --- Object Destructuring ---
const user = {
  theName: "Ali",
  theAge: 19,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  theSkills: {
    html: 70,
    css: 80,
  },
};

// الشكل البسيط
const { theName, theAge, theTitle, theCountry } = user;
console.log(theName);    // Ali
console.log(theCountry); // Egypt

// تغيير اسم المتغير + قيمة افتراضية + Nested
const {
  theName: nm,
  theAge: ag,
  theColor: co = "red",
  theSkills: { html: h, css: cs },
} = user;

console.log(nm);  // Ali
console.log(co);  // Black (لأنها موجودة، مش هياخد الافتراضية)
console.log(`My HTML Skill Progress ${h}`);
console.log(`My CSS Skill Progress ${cs}`);
