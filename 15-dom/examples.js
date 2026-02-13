// =====================================================
// 📘 الدرس 15: DOM (Document Object Model)
// افتح index.html في المتصفح وشغل الأمثلة من الـ Console
// =====================================================

// --- اختيار العناصر ---
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement[0]);

let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement[0]);

let myQueryElement = document.querySelector(".my-span");
console.log(myQueryElement);

let myQueryAllElements = document.querySelectorAll(".my-span");
console.log(myQueryAllElements);

// --- المحتوى والخصائص ---
let jsDiv = document.querySelector(".js");
if (jsDiv) {
  console.log(jsDiv.innerHTML);
  console.log(jsDiv.textContent);
}

// --- تعديل Attributes ---
let myP = document.getElementsByTagName("p")[0];
if (myP) {
  if (myP.hasAttribute("data-src")) {
    myP.setAttribute("data-src", "New Value");
  }
}

// --- إنشاء عناصر ---
let newDiv = document.createElement("div");
let newText = document.createTextNode("Product One");
newDiv.className = "product";
newDiv.setAttribute("data-test", "Testing");
newDiv.appendChild(newText);
document.body.appendChild(newDiv);

// --- التعامل مع الأطفال ---
let parentDiv = document.querySelector("div");
if (parentDiv) {
  console.log(parentDiv.children);
  console.log(parentDiv.firstElementChild);
  console.log(parentDiv.lastElementChild);
}

// --- الأحداث ---
let btn = document.getElementById("btn");
if (btn) {
  btn.onclick = function () {
    console.log("Clicked!");
  };
}

// --- classList ---
let element = document.getElementById("my-div");
if (element) {
  console.log(element.classList);
  element.classList.add("new-class");
  console.log(element.classList.contains("new-class")); // true
}

// --- CSS Styling ---
if (element) {
  element.style.color = "red";
  element.style.fontWeight = "bold";
  element.style.fontSize = "20px";
}
