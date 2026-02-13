// =====================================================
// 📘 الدرس 11: الكائنات (Objects)
// =====================================================

// --- إنشاء كائن ---
let user = {
  theName: "Ali",
  theAge: 19,
  sayHello: function () {
    return `Hello`;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

console.log("--- Dot vs Bracket Notation ---");

// --- Dot Notation vs Bracket Notation ---
let myVar = "country of";
let person = {
  theName: "Ali",
  theAge: 19,
  "country of": "Egypt",
};
console.log(person["country of"]);
console.log(person[myVar]);

console.log("--- Nested Object ---");

// --- Nested Objects ---
let fullUser = {
  name: "Ali",
  age: 19,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Sharkaya",
      two: "AbuKabir",
    },
  },
  checkAv: function () {
    if (this.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};
console.log(fullUser.name);
console.log(fullUser.skills.join(" | "));
console.log(fullUser.addresses.egypt.two);
console.log(fullUser.checkAv());

console.log("--- new Object() ---");

// --- new Object() ---
let newUser = new Object();
newUser.name = "Ali";
newUser.age = 19;
newUser.sayHello = function () {
  return `Hello`;
};
console.log(newUser.name);
console.log(newUser.sayHello());

console.log("--- this Keyword ---");

// --- this ---
console.log(typeof this); // في Node: object

console.log("--- Object.create() ---");

// --- Object.create() ---
let baseUser = {
  age: 19,
  doubleAge: function () {
    return this.age * 2;
  },
};

let copyObj = Object.create(baseUser);
copyObj.age = 50;

console.log(copyObj.age);        // 50
console.log(copyObj.doubleAge()); // 100
