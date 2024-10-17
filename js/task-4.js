const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      email,
      password,
    };
    console.log(obj);
    loginForm.reset();
  }
}
