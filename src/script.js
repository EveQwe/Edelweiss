let cancel = document.getElementById("cancel");
let dialog1 = document.getElementById("dialog1");

cancel.addEventListener("click", (event) => {
  event.preventDefault();
  dialog1.showModal();
});

let next = document.getElementById("next");
let dialog2 = document.getElementById("dialog2");

next.addEventListener("click", (event) => {
  event.preventDefault();
  dialog2.showModal();
});

let mau = document.getElementById("mau");
let engga = document.getElementById("engga");

mau.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "http://127.0.0.1:5500/src/lanjutan.html";
});

engga.addEventListener("click", (event) => {
  event.preventDefault();
  dialog2.close();
});
