let yes = document.getElementById("yes");
let no = document.getElementById("no");
let content = document.getElementById("content");
let isYes = document.getElementById("isYes");
let isNo = document.getElementById("isNo");

yes.addEventListener("click", (event) => {
  event.preventDefault();
  content.classList.remove("hidden");
  content.classList.add("display");
  isYes.classList.remove("hidden");
  isNo.classList.add("hidden");
  window.location.href = "#content";
});

no.addEventListener("click", (event) => {
  event.preventDefault();
  content.classList.remove("hidden");
  content.classList.add("display");
  isYes.classList.add("hidden");
  isNo.classList.remove("hidden");
  window.location.href = "#content";
});

let formKritik = document.getElementById("form-kritik");
let formYes = document.getElementById("form-yes");
let formNo = document.getElementById("form-no");
let dialog3 = document.getElementById("dialog3");
let tutup = document.getElementById("close");

formKritik.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = event.target.action;
  const formData = new FormData(formKritik);
  let kritik = document.getElementById("kritik");

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      dialog3.showModal();
      event.target.reset();
    })
    .catch((event) => {
      alert("Error");
    });
});

formYes.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = event.target.action;
  const formData = new FormData(kritik);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      dialog3.showModal();
      event.target.reset();
    })
    .catch((event) => {
      alert("Error");
    });
});

formNo.addEventListener("submit", (event) => {
  event.preventDefault();

  const url = event.target.action;
  const formData = new FormData(kritik);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      dialog3.showModal();
      event.target.reset();
    })
    .catch((event) => {
      alert("Error");
    });
});

tutup.addEventListener("click", (event) => {
  event.preventDefault();
  dialog3.close();
});
