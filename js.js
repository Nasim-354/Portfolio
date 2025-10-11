const nav = document.getElementById("nav");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbx9gi5pCKTh5vc55qErj9eX58tAweuBhO317IlOQH9OJl6Gh39ayM4zCWFEPbQRv3s/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
const errorEmail = document.getElementById("error-email");
const email = document.getElementById("email");
const errorPhone = document.getElementById("error-phone");
const phone = document.getElementById("phone");
const btnButton = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.innerText = " Submitting....please Wait⏳";

  //Email validation
  let isTrue = true;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email.value.trim())) {
    errorEmail.textContent = " ❌ This email cannot valid!";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "12px";
    isTrue = false;
  }
  //Phone number validation
  const validPhone = /^(?:\+0881|01)[0-9]{9}$/;
  if (!validPhone.test(phone.value.trim())) {
    errorPhone.textContent = "❌ This phone number cannot valid!";
    errorPhone.style.color = "red";
    errorPhone.style.fontSize = "12px";
    isTrue = false;
  }
  if (!isTrue) {
    msg.textContent = "";
    return;
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "✅ Message send Success Full";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 500);
      form.reset();
    })
    .catch((error) => {
      msg.innerText = "❌ Wring";
      console.error("Error!", error.message);
    });
});
