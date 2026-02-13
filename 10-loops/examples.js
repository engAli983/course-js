// =====================================================
// 📘 الدرس 10: الحلقات التكرارية (Loops)
// =====================================================

// --- For Loop: فصل الأنواع ---
let myFriends = [1, 2, "Ali", "Khaled", "Mohamed", 19, "Asmaa", "Ali", 5];
let onlyNames = [];
let onlyNumbers = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
  if (typeof myFriends[i] === "number") {
    onlyNumbers.push(myFriends[i]);
  }
}
console.log("Names:", onlyNames);
console.log("Numbers:", onlyNumbers);

console.log("--- Nested Loop ---");

// --- Nested Loop ---
let products = ["Keyboard", "Mouse", "Pen"];
let colors = ["Red", "Green", "Black"];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(products[i]);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
}

console.log("--- Break ---");

// --- Break ---
let items = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  if (items[i] === "Pen") break; // هيوقف عند "Pen"
}

console.log("--- Continue ---");

// --- Continue ---
for (let i = 0; i < items.length; i++) {
  if (typeof items[i] === "number") continue; // هيتخطى الأرقام
  console.log(items[i]);
}

console.log("--- Label ---");

// --- Label ---
mainloop: for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  nestedloop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") break mainloop; // هيوقف الحلقة الرئيسية
  }
}

console.log("--- While Loop ---");

// --- While Loop ---
let index = 0;
while (index < 5) {
  console.log(index);
  index++;
}

console.log("--- Do While Loop ---");

// --- Do While Loop ---
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 3);
