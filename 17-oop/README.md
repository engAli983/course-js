# 📘 الدرس 17: البرمجة الكائنية (OOP)

## 📌 Constructor Function
```javascript
function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}
let user = new User(100, "Ali", 5000);
```

## 📌 Class (الصيغة الحديثة) ✅
```javascript
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  writeMsg() {
    return `Hello ${this.u}`;
  }
}
```

## 🔹 Static Properties & Methods
```javascript
class User {
  static count = 0;
  constructor(id, username) {
    this.i = id;
    User.count++;
  }
  static countMembers() {
    return `${this.count} Members`;
  }
}
```

## 🔹 Inheritance (الوراثة)
```javascript
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}
```

## 🔹 Encapsulation (التغليف)
```javascript
class User {
  #salary; // Private Property
  constructor(salary) {
    this.#salary = salary;
  }
  getSalary() {
    return this.#salary;
  }
}
```

## 🔹 Prototype
كل class في JavaScript ليها `prototype` ممكن نزود عليه methods:
```javascript
User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};
```

## 🔹 Object.defineProperty
```javascript
Object.defineProperty(obj, "key", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: "value",
});
```

---

📺 [شاهد الدرس على يوتيوب](https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv) | [🔙 العودة للفهرس](../README.md)
