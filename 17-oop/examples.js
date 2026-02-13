// =====================================================
// 📘 الدرس 17: البرمجة الكائنية (OOP)
// =====================================================

// --- Constructor Function ---
function UserFunc(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let funcUser = new UserFunc(100, "Ali", 5000);
console.log(funcUser.i); // 100
console.log(funcUser.u); // Ali
console.log(funcUser.s); // 6000

console.log("--- Class Syntax ---");

// --- Class (ES6) ---
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
  }
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(100, "Ali", 5000);
console.log(userOne.writeMsg());
console.log(userOne instanceof User); // true

console.log("--- Update Properties ---");

// --- Update Properties ---
userOne.u = "Khaled";
console.log(userOne.u);

userOne.age = 19; // إضافة خاصية جديدة
console.log(userOne.age);

delete userOne.age; // حذف خاصية
console.log(userOne.age); // undefined

console.log("--- Static ---");

// --- Static Properties & Methods ---
class Counter {
  static count = 0;
  constructor(id, username) {
    this.i = id;
    this.u = username;
    Counter.count++;
  }
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let c1 = new Counter(100, "Ali");
let c2 = new Counter(101, "Elzero");
let c3 = new Counter(102, "Sayed");

console.log(Counter.count);         // 3
console.log(Counter.sayHello());
console.log(Counter.countMembers());

console.log("--- Inheritance ---");

// --- Inheritance (الوراثة) ---
class Person {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

class Admin extends Person {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

let admin = new Admin(110, "Khaled", 1);
console.log(admin.u);         // Khaled
console.log(admin.sayHello()); // Hello Khaled
console.log(admin.p);         // 1

console.log("--- Encapsulation ---");

// --- Encapsulation (التغليف) ---
class Employee {
  #salary; // Private
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.#salary = salary;
  }
  getSalary() {
    return parseInt(this.#salary);
  }
}

let emp = new Employee(100, "Ali", 5000);
console.log(emp.u);
console.log(emp.getSalary());
// console.log(emp.#salary); // ❌ Error - Private

console.log("--- Prototype ---");

// --- Prototype ---
class MyUser {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
}

MyUser.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

let mu = new MyUser(100, "Elzero");
console.log(mu.sayWelcome());

// إضافة method على String.prototype
String.prototype.addDots = function () {
  return `.${this}.`;
};
console.log("Elzero".addDots()); // .Elzero.

console.log("--- Object.defineProperty ---");

// --- Object Meta Data ---
const myObject = { a: 1, b: 2 };

Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 3,
});

console.log(myObject); // { a: 1, b: 2, c: 3 }
