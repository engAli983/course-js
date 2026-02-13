// =====================================================
// 📘 الدرس 20: التعبيرات النمطية (Regular Expressions)
// =====================================================

// --- Modifiers ---
let myStrings = "Hello Ali Khaled I Love ali";

console.log(myStrings.match(/Ali/));    // أول واحد
console.log(myStrings.match(/ali/i));   // تجاهل حالة الحروف
console.log(myStrings.match(/Ali/gi));  // كلهم

console.log("--- Ranges Part 1 ---");

// --- Ranges ---
let tld = "Com Not Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910";
console.log(nums.match(/[0-2]/g));     // الأرقام من 0 لـ 2
console.log(nums.match(/[^0-2]/g));    // عدا الأرقام من 0 لـ 2

let special = "1!2@3#4$5%678910";
console.log(special.match(/[^0-9]/g)); // الرموز الخاصة بس

console.log("--- Ranges Part 2 ---");

let myString = "AaBbcdefG123!234%^&*";
console.log(myString.match(/[a-z]/g));      // حروف صغيرة
console.log(myString.match(/[A-Z]/g));      // حروف كبيرة
console.log(myString.match(/[a-zA-Z]/g));   // كل الحروف

console.log("--- Character Classes ---");

// --- Character Classes ---
let email = "A@g.com A@g.net A-g.com a@s.org";
console.log(email.match(/\w@\w(.com|.net)/g));

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama";
let spamRe = /(\bspam|spam\b)/gi;
console.log(names.match(spamRe));

// test()
console.log(spamRe.test(names));  // true

console.log("--- Quantifiers ---");

// --- Quantifiers ---
let mails = "a@nn.sa ali@gmail.com khaled@gmail.net";
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let urls = "https://google.com http://www.website.net web.com";
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

let serials = "S100S S3000S S50000S S950000S";
console.log(serials.match(/s\d{3}s/gi));    // بالظبط 3 أرقام
console.log(serials.match(/s\d{4,5}s/gi));  // 4 أو 5 أرقام
console.log(serials.match(/s\d{4,}s/gi));   // 4 أو أكتر

console.log("--- Anchors & Lookahead ---");

// --- Anchors ---
let sentence = "We Love Programming";
console.log(/ing$/g.test(sentence));   // true - بينتهي بـ ing
console.log(/^we/gi.test(sentence));   // true - بيبدأ بـ we

// Lookahead
let namesWithZ = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ";
console.log(namesWithZ.match(/\d\w{5}(?=z)/gi));

console.log("--- Replace ---");

// --- Replace ---
let text = "We Love Programming And @ because @ Is Amazing";
console.log(text.replace("@", "JavaScript"));     // أول واحد بس
console.log(text.replaceAll("@", "JavaScript"));   // كلهم
