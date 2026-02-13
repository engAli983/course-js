// =====================================================
// 📘 الدرس 16: BOM (Browser Object Model)
// افتح index.html في المتصفح لتجربة الأمثلة
// =====================================================

// --- Alert, Confirm, Prompt ---
// alert("Hello!");

// let confirmMsg = confirm("Are You Sure?");
// if (confirmMsg) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let name = prompt("Good Day?", "Write Day With 3 Characters");
// console.log(name);

// --- setTimeout ---
let timer = setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);

// setTimeout مع parameters
setTimeout(
  function (user, age) {
    console.log(`Message for ${user}, Age: ${age}`);
  },
  2000,
  "Ali",
  19
);

// --- clearTimeout ---
let btn = document.querySelector("button");
if (btn) {
  btn.onclick = function () {
    clearTimeout(timer);
    console.log("Timer cancelled!");
  };
}

// --- setInterval ---
let div = document.querySelector("div");
if (div && div.textContent.trim() !== "") {
  let countdown = setInterval(function () {
    let current = parseInt(div.innerHTML);
    if (current > 0) {
      div.innerHTML = current - 1;
    } else {
      clearInterval(countdown);
      div.innerHTML = "Done! 🎉";
    }
  }, 1000);
}

// --- Location ---
// console.log(location.href);
// location.href = "https://google.com";
// location.reload();

// --- Local Storage ---
window.localStorage.setItem("color", "#f00");
window.localStorage.setItem("fontWeight", "bold");

console.log(window.localStorage.getItem("color"));

// window.localStorage.removeItem("color");
// window.localStorage.clear();

// --- Session Storage ---
window.sessionStorage.setItem("session-color", "#0f0");
console.log(window.sessionStorage.getItem("session-color"));

// --- Scroll ---
// window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
