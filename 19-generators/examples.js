// =====================================================
// 📘 الدرس 19: المولدات (Generators)
// =====================================================

// --- Generator Function الأساسية ---
function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator); // object
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // "Hello After Yield 1" + { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: undefined, done: true }

console.log("--- for...of ---");

// --- استخدام for...of ---
for (let value of generateNumbers()) {
  console.log(value); // 1, 2, 3, 4
}

console.log("--- Delegate Generator ---");

// --- Delegate Generator ---
function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let allGen = generateAll();
console.log(allGen.next()); // { value: 1, done: false }
console.log(allGen.next()); // { value: 2, done: false }
console.log(allGen.next()); // { value: 3, done: false }
console.log(allGen.next()); // { value: "A", done: false }
console.log(allGen.next()); // { value: "B", done: false }
console.log(allGen.next()); // { value: "C", done: false }
console.log(allGen.next()); // { value: 4, done: false }

console.log("--- return() ---");

// --- return() ---
let gen2 = generateAll();
console.log(gen2.next());
console.log(gen2.return("Z")); // { value: "Z", done: true }
console.log(gen2.next());      // { value: undefined, done: true }

console.log("--- Infinite Numbers ---");

// --- أرقام لا نهائية ---
function* infiniteNumbers() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let infinite = infiniteNumbers();
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1
console.log(infinite.next().value); // 2
console.log(infinite.next().value); // 3
console.log(infinite.next().value); // 4
