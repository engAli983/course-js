// =====================================================
// 📘 الدرس 21: AJAX و JSON
// بعض الأمثلة تحتاج متصفح - افتح index.html
// =====================================================

// --- JSON Parse و Stringify ---
const myJsonFromServer = '{"Username": "Ali", "Age": 19}';
console.log(typeof myJsonFromServer); // string

const myJsObject = JSON.parse(myJsonFromServer);
console.log(typeof myJsObject); // object
console.log(myJsObject);

myJsObject["Username"] = "Alfairon";

const backToJson = JSON.stringify(myJsObject);
console.log(typeof backToJson); // string
console.log(backToJson);

console.log("--- Sync vs Async ---");

// --- Synchronous vs Asynchronous ---
console.log("1");
console.log("2");
setTimeout(() => console.log("3 (Async - after 2 seconds)"), 2000);
console.log("4 (runs before 3!)");

console.log("--- Call Stack ---");

// --- Call Stack ---
function one() { console.log("ONE"); }
function two() { one(); console.log("TWO"); }
function three() { two(); console.log("THREE"); }
three();

console.log("--- Callback Hell ---");

// --- Callback Hell (المشكلة) ---
setTimeout(() => {
  console.log("Step 1: Download Photo");
  setTimeout(() => {
    console.log("Step 2: Resize Photo");
    setTimeout(() => {
      console.log("Step 3: Add Logo");
      setTimeout(() => {
        console.log("Step 4: Show Photo");
      }, 500);
    }, 500);
  }, 500);
}, 500);

// --- Promise (الحل) ---
const myPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection Failed"));
  }
});

myPromise
  .then((val) => console.log(`Good: ${val}`))
  .catch((err) => console.log(`Bad: ${err}`))
  .finally(() => console.log("Promise Done"));

// --- Promise.all ---
const p1 = new Promise((res) => setTimeout(() => res("First"), 2000));
const p2 = new Promise((res) => setTimeout(() => res("Second"), 1000));

Promise.all([p1, p2]).then(
  (values) => console.log("All resolved:", values)
);

// --- Async / Await ---
async function getData() {
  let users = ["Ali"];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("Not Found");
  }
}

getData().then(
  (val) => console.log(val),
  (err) => console.log(err)
);

// --- Async with Await ---
async function fetchData() {
  console.log("Before Fetch");
  let result = await new Promise((resolve) => {
    setTimeout(() => resolve("Data Loaded!"), 1000);
  });
  console.log(result);
  console.log("After Fetch");
}
fetchData();
